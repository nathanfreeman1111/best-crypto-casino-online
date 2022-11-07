'use babel';

import BestCryptoCasinoOnline from '../lib/best-crypto-casino-online';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('BestCryptoCasinoOnline', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('best-crypto-casino-online');
  });

  describe('when the best-crypto-casino-online:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.best-crypto-casino-online')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'best-crypto-casino-online:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.best-crypto-casino-online')).toExist();

        let bestCryptoCasinoOnlineElement = workspaceElement.querySelector('.best-crypto-casino-online');
        expect(bestCryptoCasinoOnlineElement).toExist();

        let bestCryptoCasinoOnlinePanel = atom.workspace.panelForItem(bestCryptoCasinoOnlineElement);
        expect(bestCryptoCasinoOnlinePanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'best-crypto-casino-online:toggle');
        expect(bestCryptoCasinoOnlinePanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.best-crypto-casino-online')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'best-crypto-casino-online:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let bestCryptoCasinoOnlineElement = workspaceElement.querySelector('.best-crypto-casino-online');
        expect(bestCryptoCasinoOnlineElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'best-crypto-casino-online:toggle');
        expect(bestCryptoCasinoOnlineElement).not.toBeVisible();
      });
    });
  });
});
