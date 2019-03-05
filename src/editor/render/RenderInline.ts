import Node from './RenderNode';
import RenderBlock from './RenderBlock';

export type Parent = RenderBlock;

export default class RenderInline extends Node {
  private parent: Parent;

  constructor(parent: Parent, id: string, size: number, selectableSize: number) {
    super(id, size, selectableSize);
    this.parent = parent;
  }

  getParent(): Parent {
    return this.parent;
  }
}