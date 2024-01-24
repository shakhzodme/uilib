import * as postcss from "postcss";

type PostCSSNode =
  | postcss.Root
  | postcss.Rule
  | postcss.AtRule
  | postcss.Declaration;

function extractVariablesInner(node: PostCSSNode): string[] {
  const variables: string[] = [];

  if (node.type == "decl") {
    if (node.prop.slice(0, 2) != "--") return variables;
    const prop = node.prop.slice(2);
    variables.push(prop);
    return variables;
  }

  node.nodes.forEach((node) => {
    if (node.type == "rule" || node.type == "decl") {
      variables.push(...extractVariablesInner(node));
    }
  });

  return variables;
}

export function extractVariables(styles: (Buffer | string)[]) {
  const variables: string[] = [];

  styles.forEach((style) => {
    const root = postcss.parse(style);
    variables.push(...extractVariablesInner(root));
  });

  return variables;
}

function extractValuesInner(node: PostCSSNode): Record<string, string> {
  const variables: Record<string, string> = {};

  if (node.type == "decl") {
    if (node.prop.slice(0, 2) != "--") return variables;
    const prop = node.prop.slice(2);
    variables[prop] = node.value;
    return variables;
  }

  node.nodes.forEach((node) => {
    if (node.type == "rule" || node.type == "decl") {
      Object.assign(variables, extractValuesInner(node));
    }
  });

  return variables;
}

export function extractValues(styles: (Buffer | string)[]) {
  const variables: Record<string, string> = {};

  styles.forEach((style) => {
    const root = postcss.parse(style);
    Object.assign(variables, extractValuesInner(root));
  });

  return variables;
}
