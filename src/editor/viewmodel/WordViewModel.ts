import TaleWeaver from '../TaleWeaver';
import Inline from '../treemodel/Inline';
import BlockViewModel from './BlockViewModel';

export interface Segment {
  inline: Inline;
  from: number;
  to: number;
}

abstract class WordViewModel {
  protected taleWeaver: TaleWeaver;
  protected blockViewModel: BlockViewModel;
  protected segments: Segment[];

  constructor(taleWeaver: TaleWeaver, blockViewModel: BlockViewModel, segments: Segment[]) {
    this.taleWeaver = taleWeaver;
    this.blockViewModel = blockViewModel;
    this.segments = segments;
  }

  abstract getType(): string;

  getSegments(): Segment[] {
    return this.segments;
  }
}

export default WordViewModel;