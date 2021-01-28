import db from './../../../init/database';
import { Player } from '../../../types/interfaces';

const { players } = db;

export async function getPlayerById(id: string, avatar = false): Promise<Player | null> {
	return new Promise(res => {
		players.findOne({ _id: id }, (err, player) => {
			if (err) {
				return res(null);
			}
			if (!avatar && player && player.avatar) delete player.avatar;
			return res(player);
		});
	});
}
export async function getPlayerBySteamId(steamid: string, avatar = false): Promise<Player | null> {
	return new Promise(res => {
		players.findOne({ steamid }, (err, player) => {
			if (err) {
				return res(null);
			}
			if (!avatar && player && player.avatar) delete player.avatar;
			return res(player);
		});
	});
}

export const getPlayersList = (query: any) =>
	new Promise<Player[]>(res => {
		players.find(query, (err, players) => {
			if (err) {
				return res([]);
			}
			return res(players);
		});
	});
