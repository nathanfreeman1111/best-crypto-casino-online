'use babel';

import BestCryptoCasinoOnlineView from './best-crypto-casino-online-view';
import { CompositeDisposable } from 'atom';

export default {

  bestCryptoCasinoOnlineView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bestCryptoCasinoOnlineView = new BestCryptoCasinoOnlineView(state.bestCryptoCasinoOnlineViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bestCryptoCasinoOnlineView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'best-crypto-casino-online:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bestCryptoCasinoOnlineView.destroy();
  },

  serialize() {
    return {
      bestCryptoCasinoOnlineViewState: this.bestCryptoCasinoOnlineView.serialize()
    };
  },

  toggle() {
    console.log('BestCryptoCasinoOnline was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
