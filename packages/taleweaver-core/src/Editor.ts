import Config from './Config'
import Tokenizer from './state/Tokenizer';
import State from './state/State';
import Parser from './model/Parser';
import RenderEngine from './render/RenderEngine';
import LayoutEngine from './layout/LayoutEngine';
import Presenter from './view/Presenter';
import Extension from './extension/Extension';
import ExtensionProvider from './extension/ExtensionProvider';

export default class Editor {
  protected config: Config;
  protected state: State;
  protected tokenizer: Tokenizer;
  protected parser: Parser;
  protected renderEngine: RenderEngine;
  protected layoutEngine: LayoutEngine;
  protected presenter: Presenter;
  protected domWrapper?: HTMLElement;
  protected extensionProvider: ExtensionProvider;

  constructor(config: Config, markup: string) {
    this.config = config;
    this.tokenizer = new Tokenizer(this.config, markup);
    this.state = this.tokenizer.getState();
    this.parser = new Parser(this.config, this.state);
    this.renderEngine = new RenderEngine(this.config, this.parser.getDoc());
    this.layoutEngine = new LayoutEngine(this.config, this.renderEngine.getDocRenderNode());
    this.presenter = new Presenter(this.config, this.layoutEngine.getDocLayout());
    this.extensionProvider = new ExtensionProvider(this.layoutEngine, this.presenter);
  }

  getConfig(): Config {
    return this.config;
  }

  getState(): State {
    return this.state;
  }

  mount(domWrapper: HTMLElement) {
    this.domWrapper = domWrapper;
    this.presenter.mount(domWrapper);
  }

  registerExtension(extension: Extension) {
    this.extensionProvider.registerExtension(extension);
  }
}
