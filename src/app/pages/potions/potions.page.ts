import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController, PopoverController } from '@ionic/angular';

import { OptionsPopoverComponent } from 'src/app/components/options-popover/options-popover.component';
import { AuthService } from 'src/app/services/auth.service';
import { PotionEditorModal } from 'src/app/modals/potion-editor/potion-editor.component';

@Component({
	selector: 'app-potions',
	templateUrl: './potions.page.html',
	styleUrls: ['./potions.page.scss'],
})
export class PotionsPage implements OnInit {

	constructor(
		private _DataService: DataService,
		private _ModalCtrl: ModalController,
		private _PopCtrl: PopoverController,
		private _AuthService: AuthService
	) { }

	ngOnInit() {
	}

	async OpenEditor() {
		const Modal = await this._ModalCtrl.create({
			component: PotionEditorModal
		})
		return await Modal.present();
	}

	async OpenOptions(_Event: Event, _Data) {
		const Pop = await this._PopCtrl.create({
			component: OptionsPopoverComponent,
			event: _Event,
			componentProps: {
				"Type": "Potion",
				"Data": _Data
			}
		})

		return await Pop.present();
	}

}
