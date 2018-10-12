export function getNodeWidth(node) {
  const nodeStyles = window.getComputedStyle(node, null);
  const width = node.offsetWidth;

  const borderLeftWidth = nodeStyles.borderLeftWidth
    ? parseFloat(nodeStyles.borderLeftWidth)
    : 0;

  const borderRightWidth = nodeStyles.borderRightWidth
    ? parseFloat(nodeStyles.borderRightWidth)
    : 0;

  const paddingLeft = nodeStyles.paddingLeft
    ? parseFloat(nodeStyles.paddingLeft)
    : 0;

  const paddingRight = nodeStyles.paddingRight
    ? parseFloat(nodeStyles.paddingRight)
    : 0;

  return (
    width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight
  );
}
