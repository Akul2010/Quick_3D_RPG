import {entity} from "./entity.js";


export const quest_component = (() => {

  const _TITLE = 'Welcome Adventurer!';
  const _TEXT = `Welcome to The Deathland adventurer, I see we both are the only survivors here. I'll help you with some controls, if you kill the monsters for me. WASD to move and space to attack. Kill as many monsters as you can without dying. I must leave now, I am in constant danger. Good Luck, Knight!`;

  class QuestComponent extends entity.Component {
    constructor() {
      super();

      const e = document.getElementById('quest-ui');
      e.style.visibility = 'hidden';
    }

    InitComponent() {
      this._RegisterHandler('input.picked', (m) => this._OnPicked(m));
    }

    _OnPicked(msg) {
      // HARDCODE A QUEST
      const quest = {
        id: 'foo',
        title: _TITLE,
        text: _TEXT,
      };
      this._AddQuestToJournal(quest);
    }

    _AddQuestToJournal(quest) {
      const ui = this.FindEntity('ui').GetComponent('UIController');
      ui.AddQuest(quest);
    }
  };

  return {
      QuestComponent: QuestComponent,
  };
})();
