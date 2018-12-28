import GlobalDisplay from '../display/globalDisplay';
import NullBoard from '../board/nullBoard';
import NullCursor from '../display/nullCursor';
import nullPhaseStage from '../phaseStage/nullPhaseStage';
import FrameSource from '@/game_attribute/frame_source';
import Campaign from '../campaign/campaign';
import Game from '~/game';
import MainMenu from '@/game_attribute/main_menu';
import MainMenuWindowOne from '@/game_window/main_menu_window_one';

let sF = 45;
let display = new GlobalDisplay(new NullBoard(), new NullCursor, new nullPhaseStage(), sF);
let frameSource = new FrameSource(display);
let campaign = new Campaign(display, frameSource);

let game = new Game(
  display,
  frameSource,
  campaign,
  new MainMenu(new MainMenuWindowOne()),
);

game.play();
