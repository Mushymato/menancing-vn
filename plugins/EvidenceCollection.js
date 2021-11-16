class EvidenceCollection extends RenJS.Plugin {

    config = null;
    state = null;

    onStart() {
        this.config = this.game.setup.EvidenceCollection;
        this.state = {}
        this.game.managers.logic.vars.EvidenceCollection = this.state;
    }

    onLoad(slot, data) { 
        // load point and click data from saved variables
        this.state = data.vars.EvidenceCollection;
    }

    onCall(params) {
		console.log('EvidenceCollection.onCall', params);
        const clues = this.config[params.clueset];
        console.log(clues);
		this.game.resolveAction();
    }
}

RenJSGame.addPlugin('EvidenceCollection', EvidenceCollection)
