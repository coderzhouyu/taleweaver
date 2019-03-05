import TaleWeaver from '../../TaleWeaver';
import Command from './Command';
import Transformation from '../Transformation';
import Translate from '../operations/Translate';

export default function moveToLineStart(): Command {
  return (taleWeaver: TaleWeaver): Transformation => {
    const transformation = new Transformation();
    const editorCursor = taleWeaver.getEditorCursor();
    if (!editorCursor) {
      return transformation;
    }
    const head = editorCursor.getHead();
    const docView = taleWeaver.getDocView();
    const viewAwarePosition = docView.resolveModelPosition(head);
    if (viewAwarePosition.lineViewPosition > 0) {
      transformation.addOperation(new Translate(0 - viewAwarePosition.lineViewPosition));
    }
    return transformation;
  };
}