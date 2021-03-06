/*
 * Copyright 2020 James Lyne
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

export enum MutationTypes {
	SET_CONFIGURATION = 'setConfiguration',
	SET_MESSAGES = 'setMessages',
	SET_WORLDS = 'setWorlds',
	SET_COMPONENTS = 'setComponents',
	SET_MARKER_SETS = 'setMarkerSets',
	ADD_WORLD = 'addWorld',
	SET_WORLD_STATE = 'setWorldState',
	SET_UPDATE_TIMESTAMP = 'setUpdateTimestamp',
	ADD_MARKER_SET_UPDATES = 'addMarkerSetUpdates',
	ADD_TILE_UPDATES = 'addTileUpdates',
	ADD_CHAT = 'addChat',
	POP_MARKER_UPDATES = 'popMarkerUpdates',
	POP_AREA_UPDATES = 'popAreaUpdates',
	POP_CIRCLE_UPDATES = 'popCircleUpdates',
	POP_LINE_UPDATES = 'popLineUpdates',
	POP_TILE_UPDATES = 'popTileUpdates',
	INCREMENT_REQUEST_ID = 'incrementRequestId',
	SET_PLAYERS = 'setPlayers',
	SET_PLAYERS_ASYNC = 'setPlayersAsync',
	SYNC_PLAYERS = 'syncPlayers',

	SET_CURRENT_MAP = 'setCurrentMap',
	SET_CURRENT_PROJECTION = 'setCurrentProjection',
	SET_CURRENT_LOCATION = 'setCurrentLocation',
	SET_CURRENT_ZOOM = 'setCurrentZoom',
	SET_PARSED_URL = 'setParsedUrl',

	SET_FOLLOW_TARGET = 'setFollowTarget',
	SET_PAN_TARGET = 'setPanTarget',

	CLEAR_FOLLOW_TARGET = 'clearFollow',
	CLEAR_PAN_TARGET = 'clearPanTarget',

	SET_SMALL_SCREEN = 'setSmallScreen',
	TOGGLE_UI_ELEMENT_VISIBILITY = 'toggleUIElementVisibility',
	SET_UI_ELEMENT_VISIBILITY = 'setUIElementVisibility',

	SET_LOGGED_IN = 'setLoggedIn',
}