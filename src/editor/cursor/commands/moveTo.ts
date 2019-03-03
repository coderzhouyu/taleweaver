import TaleWeaver from '../../TaleWeaver';
import Command from './Command';
import Transformation from '../Transformation';
import Translate from '../operations/Translate';

export default function moveTo(position: number): Command {
  return (taleWeaver: TaleWeaver): Transformation => {
    const transformation = new Transformation();
    const editorCursor = taleWeaver.getEditorCursor();
    if (!editorCursor) {
      return transformation;
    }
    transformation.addOperation(new Translate(position - editorCursor.getHead()));
    return transformation;
  };
}
