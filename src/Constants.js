export const GAME_WIDTH = window.innerWidth;
export const GAME_HEIGHT = window.innerHeight;

export const SKIER_CRASH = 'skierCrash';
export const SKIER_LEFT = 'skierLeft';
export const SKIER_LEFTDOWN = 'skierLeftDown';
export const SKIER_DOWN = 'skierDown';
export const SKIER_RIGHTDOWN = 'skierRightDown';
export const SKIER_RIGHT = 'skierRight';
export const TREE = 'tree';
export const TREE_CLUSTER = 'treeCluster';
export const ROCK1 = 'rock1';
export const ROCK2 = 'rock2';
export const SKIER_JUMP_1 = 'skierJump1';
export const SKIER_JUMP_2 = 'skierJump2';
export const SKIER_JUMP_3 = 'skierJump3';
export const SKIER_JUMP_4 = 'skierJump4';
export const SKIER_JUMP_5 = 'skierJump5';
export const RAMP = 'ramp';
export const RHINO_DELAY = 300;
export const RHINO_DEFAULT = 'rhinoDefault';
export const RHINO_RUN_LEFT = 'rhinoRunLeft';
export const RHINO_RUN_LEFT_2 = 'rhinoRunLeft2';
export const RHINO_LIFT = 'rhinoLift';
export const RHINO_LIFT_MOUTH_OPEN ='rhinoLiftMouthOpen';
export const RHINO_EAT_1 ='rhinoEat1';
export const RHINO_EAT_2 ='rhinoEat2';
export const RHINO_EAT_3 ='rhinoEat3';
export const RHINO_EAT_4 ='rhinoEat4';

export const SKIER_STARTING_SPEED = 10;
export const SKIER_DIAGONAL_SPEED_REDUCER = 1.4142;

export const RHINO_STARTING_SPEED = 12;
export const RHINO_TURN_SPEED_REDUCER = 2;
export const RHINO_TURN_TIME = 50;

export const ASSETS = {
    [SKIER_CRASH]: 'img/skier_crash.png',
    [SKIER_LEFT]: 'img/skier_left.png',
    [SKIER_LEFTDOWN]: 'img/skier_left_down.png',
    [SKIER_DOWN]: 'img/skier_down.png',
    [SKIER_RIGHTDOWN]: 'img/skier_right_down.png',
    [SKIER_RIGHT]: 'img/skier_right.png',
    [TREE] : 'img/tree_1.png',
    [TREE_CLUSTER] : 'img/tree_cluster.png',
    [ROCK1] : 'img/rock_1.png',
    [ROCK2] : 'img/rock_2.png',
    [SKIER_JUMP_1] : 'img/skier_jump_1.png',
    [SKIER_JUMP_2] : 'img/skier_jump_2.png',
    [SKIER_JUMP_3] : 'img/skier_jump_3.png',
    [SKIER_JUMP_4] : 'img/skier_jump_4.png',
    [SKIER_JUMP_5] : 'img/skier_jump_5.png',
    [RAMP] : 'img/jump_ramp.png',
    [RHINO_DEFAULT] : 'img/rhino_default.png',
    [RHINO_RUN_LEFT] : 'img/rhino_run_left.png',
    [RHINO_RUN_LEFT_2] : 'img/rhino_run_left_2.png',
    [RHINO_LIFT] : 'img/rhino_lift.png',
    [RHINO_LIFT_MOUTH_OPEN] : 'img/rhino_lift_mouth_open.png',
    [RHINO_EAT_1] : 'img/rhino_lift_eat_1.png',
    [RHINO_EAT_2] : 'img/rhino_lift_eat_2.png',
    [RHINO_EAT_3] : 'img/rhino_lift_eat_3.png',
    [RHINO_EAT_4] : 'img/rhino_lift_eat_4.png',
};

export const SKIER_DIRECTIONS = {
    CRASH : 0,
    LEFT : 1,
    LEFT_DOWN : 2,
    DOWN : 3,
    RIGHT_DOWN : 4,
    RIGHT : 5
};

export const SKIER_JUMP = {
    JUMP_1 : 100,
    JUMP_2 : 80,
    JUMP_3 : 60,
    JUMP_4 : 40,
    JUMP_5 : 20
};

export const RHINO_RUN = {
    RUN_1 : 30,
    RUN_2 : 15
};

export const RHINO_EAT = {
    LIFT : 120,
    LIFT_MOUTH_OPEN : 100,
    EAT_1 : 80,
    EAT_2 : 60,
    EAT_3 : 40,
    EAT_4 : 20
};

export const SKIER_DIRECTION_ASSET = {
    [SKIER_DIRECTIONS.CRASH] : SKIER_CRASH,
    [SKIER_DIRECTIONS.LEFT] : SKIER_LEFT,
    [SKIER_DIRECTIONS.LEFT_DOWN] : SKIER_LEFTDOWN,
    [SKIER_DIRECTIONS.DOWN] : SKIER_DOWN,
    [SKIER_DIRECTIONS.RIGHT_DOWN] : SKIER_RIGHTDOWN,
    [SKIER_DIRECTIONS.RIGHT] : SKIER_RIGHT
};

export const SKIER_JUMP_ASSET = {
    [SKIER_JUMP.JUMP_1] : SKIER_JUMP_1,
    [SKIER_JUMP.JUMP_2] : SKIER_JUMP_2,
    [SKIER_JUMP.JUMP_3] : SKIER_JUMP_3,
    [SKIER_JUMP.JUMP_4] : SKIER_JUMP_4,
    [SKIER_JUMP.JUMP_5] : SKIER_JUMP_5
};

export const RHINO_RUN_ASSET = {
    [RHINO_RUN.RUN_1] : RHINO_RUN_LEFT,
    [RHINO_RUN.RUN_2] : RHINO_RUN_LEFT_2
};

export const RHINO_EAT_ASSET = {
    [RHINO_EAT.LIFT] : RHINO_LIFT,
    [RHINO_EAT.LIFT_MOUTH_OPEN] : RHINO_LIFT_MOUTH_OPEN,
    [RHINO_EAT.EAT_1] : RHINO_EAT_1,
    [RHINO_EAT.EAT_2] : RHINO_EAT_2,
    [RHINO_EAT.EAT_3] : RHINO_EAT_3,
    [RHINO_EAT.EAT_4] : RHINO_EAT_4
};

export const KEYS = {
    LEFT : 37,
    RIGHT : 39,
    UP : 38,
    DOWN : 40,
    SPACE: 32
};