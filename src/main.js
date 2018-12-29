import GlobalDisplay from '@/game_attribute/global_display';
import NullBoard from '@/board/nullBoard';
import NullCursor from '@/cursor/null_cursor';
import nullPhaseStage from '@/phase_stage/null_phase_stage';
import FrameSource from '@/game_attribute/frame_source';
import Campaign from '@/game_attribute/campaign';
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
