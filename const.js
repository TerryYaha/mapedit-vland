/**input moulde */
export const IMAGE_TYPE = 'image';
export const TILEMAP_TYPE = 'tilemap';
export const TEXT_TYPE = 'image';

/**
  flagObj = 9 
  freeObjAboveAvatar = 8 
  wallFront = 7
  objAboveAvatar = 6
  avatar = 5
  objBelowAvatar = 4
  freeObjBelowAvatar = 3
  wallBehind = 2
  ground = 1
 */

/**proccess moudle */

const NEW_LAYERS = {
  FLAG_OBJ: 9,
  FREE_OBJ_ABOVE_AVATAR: 8,
  WALL_FRONT: 7,
  OBJ_ABOVE_AVATAR: 6,
  AVATAR: 5,
  OBJ_BELOW_AVATAR: 4,
  FREE_OBJ_BELOW_AVATAR: 3,
  WALL_BEHIND: 2,
  GROUND: 1
};

const NEW_LAYER_LABEL = {
  [NEW_LAYERS.FLAG_OBJ]: 'flagObj',
  [NEW_LAYERS.FREE_OBJ_ABOVE_AVATAR]: 'freeObjAboveAvatar',
  [NEW_LAYERS.WALL_FRONT]: 'wallFront',
  [NEW_LAYERS.OBJ_ABOVE_AVATAR]: 'objAboveAvatar',
  [NEW_LAYERS.AVATAR]: 'avatar',
  [NEW_LAYERS.WALL_BEHIND]: 'wallBehind',
  [NEW_LAYERS.FREE_OBJ_BELOW_AVATAR]: 'freeObjBelowAvatar',
  [NEW_LAYERS.OBJ_BELOW_AVATAR]: 'objBelowAvatar',
  [NEW_LAYERS.GROUND]: 'ground',
};

// TODO: remove after migration
const LAYER = {
  FLAG_OBJ: 8,
  SMALL_OBJ: 7,
  BIG_OBJ: 6,
  WALL_FRONT: 5,
  COLLIDER: 4,
  WALL_BEHIND: 3,
  NO_COLLIDER_OBJ: 2,
  GROUND: 1,
};

// TODO: remove after migration
const LAYER_LABEL = {
  [LAYER.FLAG_OBJ]: 'flagObj',
  [LAYER.SMALL_OBJ]: 'smallObj',
  [LAYER.BIG_OBJ]: 'bigObj',
  [LAYER.WALL_FRONT]: 'wallFront',
  [LAYER.COLLIDER]: 'Collider',
  [LAYER.WALL_BEHIND]: 'wallBehind',
  [LAYER.NO_COLLIDER_OBJ]: 'noColliderObj',
  [LAYER.GROUND]: 'ground',
};

const USER_LAYER = {
  FLAG: 1,
  OBJ: 2,
  WALL: 3,
  FLOOR: 4,
  // 新增加的用户图层
  FREE_OBJ: 5
};

const USER_LAYER_TO_LAYERS = {
  [USER_LAYER.FLAG]: [LAYER.FLAG_OBJ],
  [USER_LAYER.OBJ]: [LAYER.SMALL_OBJ, LAYER.BIG_OBJ, LAYER.NO_COLLIDER_OBJ],
  [USER_LAYER.WALL]: [LAYER.WALL_FRONT, LAYER.WALL_BEHIND],
  [USER_LAYER.FLOOR]: [LAYER.GROUND],
};

const INTERACTIVE_TYPE = {
  DEFAULT: 0,
  LOCAL_FILE: 1,
  STICKY_NOTE: 2,
  VIDEO: 3,
  WHITE_BOARD: 4,
  HYPER_LINK: 5,
  ONLINE_MUSIC: 6,
  LOCAL_MUSIC: 7,
  LOCAL_PICTURE: 8,
  LOCAL_TEXT: 9,
  PORTAL: 10,
  LIVE: 11,
};

const INTERACTIVE_TYPE_LABEL = {
  [INTERACTIVE_TYPE.DEFAULT]: '无交互',
  [INTERACTIVE_TYPE.LOCAL_FILE]: '本地文件',
  [INTERACTIVE_TYPE.STICKY_NOTE]: '便利贴',
  [INTERACTIVE_TYPE.VIDEO]: '本地视频',
  [INTERACTIVE_TYPE.WHITE_BOARD]: '白板',
  [INTERACTIVE_TYPE.HYPER_LINK]: '超链接',
  [INTERACTIVE_TYPE.ONLINE_MUSIC]: '网络音乐',
  [INTERACTIVE_TYPE.LOCAL_MUSIC]: '本地音乐',
  [INTERACTIVE_TYPE.LOCAL_PICTURE]: '本地图片',
  [INTERACTIVE_TYPE.LOCAL_TEXT]: '本地文字',
  [INTERACTIVE_TYPE.PORTAL]: '传送门',
  [INTERACTIVE_TYPE.LIVE]: '直播流',
};

const INTERACTIVE_TYPE_SVG = {
  [INTERACTIVE_TYPE.DEFAULT]: '',
  [INTERACTIVE_TYPE.LOCAL_FILE]: 'file',
  [INTERACTIVE_TYPE.STICKY_NOTE]: 'notes',
  [INTERACTIVE_TYPE.VIDEO]: 'video',
  [INTERACTIVE_TYPE.WHITE_BOARD]: 'whiteboard',
  [INTERACTIVE_TYPE.HYPER_LINK]: 'link',
  [INTERACTIVE_TYPE.LOCAL_MUSIC]: 'music',
  [INTERACTIVE_TYPE.LOCAL_PICTURE]: 'picture',
  [INTERACTIVE_TYPE.LIVE]: 'live',
};

// 工具栏工具
const Tool = Object.freeze({
  // 选择
  Select: 'select',
  // 复制，实际的含义包含复制和连续插入
  Copy: 'copy',
  // 插入贴图，贴图模式下使用，在工具栏没有对应图标
  InsertSticker: 'insertSticker',
  // 擦除，橡皮擦拖动擦除
  Eraser: 'eraser',
  // 拖动画布
  Hand: 'hand',
  // 插入文字
  InsertText: 'insertText',
  // 插入地板
  InsertFloor: 'insertFloor',
  // 插入效果
  InsertEffect: 'insertEffect',
  // 插入墙
  InsertWall: 'insertWall',
});

// 编辑模式
const Mode = Object.freeze({
  // 地板模式
  Floors: 'floors',
  // 墙壁模式
  Walls: 'walls',
  // 物件模式
  Objects: 'objects',
  // 贴图模式，包含贴图和文字
  Stickers: 'stickers',
  // 效果模式
  TileEffects: 'tileEffects',
});

// 素材类型
const MaterialSource = Object.freeze({
  // 官方素材
  Official: 'official',
  // 个人素材
  Personal: 'personal',
});

// 保存状态
const SavingStatus = Object.freeze({
  // 已保存
  Saved: 'saved',
  // 保存中
  Saving: 'saving',
  // 未保存
  NotSaved: 'notSaved',
});

// 墙的类型
const WallType = Object.freeze({
  // 简单
  Simple: 1,
  // 复杂
  Complicated: 2,
});

// 文字水平对齐
const TextAlign = Object.freeze({
  // 左对齐
  Left: 'LEFT',
  // 居中对齐
  Center: 'CENTER',
  // 右对齐
  Right: 'RIGHT',
});

// 地块效果类别
const TileEffectType = Object.freeze({
  Spawn: '出生点',
  Impassable: '禁行区域',
  TransferDoor: '传送地块',
});

// 用户资源库-资源类型
const ResourceType = Object.freeze({
  // 文档
  Document: 1,
  // 图片
  Image: 2,
  // 视频
  Video: 3,
  // 音频
  Audio: 4,
});

// 用户资源库-图片资源子类型
const ImageResourceSubtype = Object.freeze({
  // 贴图
  Sticker: 1,
  // 背景图
  Background: 2,
  // 交互物体图片
  Interactive: 3,
});

// 格网单元格宽度
const CELL_WIDTH = 64;

// 格网单元格高度
const CELL_HEIGHT = 64;

// 最大画布宽高
const MAX_CANVAS_SIZE = 1280;

const OBJECT_TYPE = {
  TILEMAP: 'tilemap',
  IMAGE: 'image',
  TEXT: 'text',
  BACKGROUND: 'background',
};

// 非隔离模式下的层级列表，从高到低
const nonIsolatedLayersDesc = [
  NEW_LAYERS.FREE_OBJ_ABOVE_AVATAR,
  NEW_LAYERS.WALL_FRONT,
  NEW_LAYERS.OBJ_ABOVE_AVATAR,
  NEW_LAYERS.AVATAR,
  NEW_LAYERS.OBJ_BELOW_AVATAR,
  NEW_LAYERS.FREE_OBJ_BELOW_AVATAR,
  NEW_LAYERS.WALL_BEHIND,
  NEW_LAYERS.GROUND,
];

// 隔离模式下的层级列表，从高到低
const isolatedLayersDesc = [
  NEW_LAYERS.FLAG_OBJ,
];

const layersDesc = Object.values(NEW_LAYERS).sort().reverse();

const layersAsc = Object.values(NEW_LAYERS).sort();

const fontSizeOptions = [9, 10, 11, 12, 13, 14, 18, 24, 36, 48, 64, 72, 96, 144, 288].map((fontSize) => ({
  value: fontSize,
  label: fontSize,
}));

const interactiveOptions = ([
  INTERACTIVE_TYPE.DEFAULT,
  INTERACTIVE_TYPE.LOCAL_FILE,
  INTERACTIVE_TYPE.STICKY_NOTE,
  INTERACTIVE_TYPE.VIDEO,
  INTERACTIVE_TYPE.WHITE_BOARD,
  INTERACTIVE_TYPE.HYPER_LINK,
  INTERACTIVE_TYPE.ONLINE_MUSIC,
  INTERACTIVE_TYPE.LOCAL_MUSIC,
]).map((type) => ({
  value: type,
  label: INTERACTIVE_TYPE_LABEL[type],
}));

const TRANSPARENT_1PX = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

// 悬浮物件/贴图的不透明度为50%
const FLOAT_OBJECT_OPACITY = 0.5;

// 悬浮地块效果不透明度
const HOVER_TILE_EFFECT_OPACITY = 0.7;

// 地块效果不透明度
const TILE_EFFECT_OPACITY = 0.7;

// 激活地块效果不透明度
const ACTIVE_TILE_EFFECT_OPACITY = 1;

// 文字默认行高
const DEFAULT_LINE_HEIGHT = 1.2;

// 加载失败的图片占位图
const BROKEN_IMAGE_PLACEHOLDER = "data:image/svg+xml,%3Csvg width='105' height='104' viewBox='0 0 105 104' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='.781' width='104' height='104' rx='3' fill='%23E0E0E0'/%3E%3Cpath d='M21.866 14.145v17.454h-3.69V14.145h3.69zM24.834 31.6V18.508h3.46v2.31h.154c.273-.768.727-1.373 1.363-1.816.637-.443 1.398-.665 2.285-.665.897 0 1.662.224 2.292.673a3.17 3.17 0 0 1 1.262 1.807h.136c.267-.75.75-1.35 1.449-1.798.704-.455 1.537-.682 2.497-.682 1.221 0 2.213.39 2.974 1.168.767.772 1.15 1.869 1.15 3.29v8.803h-3.621v-8.088c0-.727-.194-1.272-.58-1.636-.386-.364-.87-.545-1.449-.545-.659 0-1.173.21-1.542.63-.37.415-.554.963-.554 1.645V31.6h-3.52v-8.164c0-.642-.185-1.154-.554-1.534-.364-.381-.844-.571-1.44-.571a2 2 0 0 0-1.091.306c-.319.2-.571.48-.759.844-.187.358-.281.779-.281 1.261V31.6h-3.63zM50.458 31.847c-.835 0-1.58-.145-2.233-.435a3.594 3.594 0 0 1-1.551-1.304c-.375-.58-.563-1.301-.563-2.165 0-.727.134-1.338.4-1.832.268-.495.631-.892 1.092-1.193.46-.302.983-.529 1.568-.682.59-.154 1.21-.262 1.858-.324.761-.08 1.375-.153 1.84-.222.467-.074.805-.181 1.015-.324.21-.142.315-.352.315-.63v-.051c0-.54-.17-.958-.511-1.253-.335-.296-.813-.443-1.432-.443-.653 0-1.173.145-1.56.434a2 2 0 0 0-.767 1.074l-3.358-.273a4.563 4.563 0 0 1 1.006-2.062c.5-.585 1.145-1.034 1.935-1.347.795-.318 1.716-.477 2.761-.477.727 0 1.423.085 2.088.256a5.46 5.46 0 0 1 1.781.792c.523.358.935.819 1.236 1.381.301.557.452 1.224.452 2.003v8.83h-3.443v-1.816h-.103c-.21.41-.491.77-.843 1.082a3.906 3.906 0 0 1-1.27.725c-.495.17-1.066.256-1.713.256zm1.04-2.506c.534 0 1.005-.105 1.414-.315.41-.216.73-.506.963-.87.233-.363.35-.775.35-1.235v-1.39c-.114.074-.27.142-.469.205-.193.057-.412.11-.656.162-.245.045-.489.088-.733.128l-.665.093a4.494 4.494 0 0 0-1.116.299 1.785 1.785 0 0 0-.742.554c-.176.227-.264.511-.264.852 0 .494.179.872.537 1.133.364.256.824.384 1.38.384zM66.544 36.781c-1.176 0-2.184-.162-3.025-.486-.835-.318-1.5-.752-1.994-1.303a4.01 4.01 0 0 1-.964-1.858l3.358-.452a2.2 2.2 0 0 0 .486.733c.222.227.514.409.878.545.37.142.818.213 1.347.213.79 0 1.44-.193 1.951-.58.517-.38.776-1.02.776-1.917v-2.395h-.153a3.45 3.45 0 0 1-.716 1.032c-.319.323-.728.588-1.228.792-.5.205-1.096.307-1.79.307-.982 0-1.877-.227-2.684-.682-.801-.46-1.44-1.162-1.918-2.105-.471-.949-.707-2.148-.707-3.597 0-1.482.241-2.721.724-3.715.483-.995 1.125-1.74 1.926-2.233a4.977 4.977 0 0 1 2.651-.742c.733 0 1.347.125 1.84.375.495.244.893.551 1.194.92.307.364.543.722.708 1.074h.136V18.51h3.605v13.218c0 1.114-.273 2.046-.818 2.796-.546.75-1.301 1.312-2.267 1.687-.96.38-2.066.571-3.316.571zm.077-8.096c.585 0 1.08-.145 1.483-.435.41-.295.722-.716.938-1.261.221-.552.332-1.21.332-1.978 0-.767-.108-1.431-.324-1.994-.216-.568-.528-1.008-.937-1.321-.41-.313-.907-.469-1.492-.469-.596 0-1.1.162-1.508.486-.41.318-.72.761-.93 1.33-.21.568-.315 1.224-.315 1.968 0 .756.105 1.41.316 1.96.216.546.525.97.929 1.27.409.296.912.444 1.508.444zM81.8 31.855c-1.346 0-2.506-.273-3.477-.818a5.604 5.604 0 0 1-2.233-2.335c-.523-1.012-.784-2.208-.784-3.588 0-1.347.261-2.529.784-3.546a5.796 5.796 0 0 1 2.207-2.378c.955-.568 2.074-.852 3.358-.852.864 0 1.668.14 2.412.418a5.35 5.35 0 0 1 1.96 1.235c.563.552 1 1.245 1.313 2.08.312.83.469 1.801.469 2.915v.997H76.755v-2.25h7.636c0-.523-.114-.986-.34-1.39a2.442 2.442 0 0 0-.947-.945c-.398-.233-.86-.35-1.39-.35-.55 0-1.039.128-1.465.384-.42.25-.75.588-.989 1.014-.238.42-.36.89-.366 1.406v2.14c0 .647.12 1.207.358 1.678a2.62 2.62 0 0 0 1.031 1.091c.443.256.969.384 1.577.384.403 0 .772-.057 1.108-.17a2.3 2.3 0 0 0 .86-.512c.24-.227.42-.506.546-.835l3.358.221a4.586 4.586 0 0 1-1.048 2.114c-.523.597-1.2 1.063-2.029 1.398-.824.33-1.775.494-2.855.494zM47.963 43.145v17.454h-3.188l-7.593-10.985h-.128v10.985h-3.69V43.145h3.238l7.534 10.977h.153V43.145h3.674zM56.858 60.855c-1.324 0-2.468-.281-3.434-.844a5.774 5.774 0 0 1-2.225-2.369c-.523-1.017-.784-2.196-.784-3.537 0-1.352.261-2.534.784-3.545a5.705 5.705 0 0 1 2.225-2.37c.966-.568 2.11-.852 3.434-.852 1.324 0 2.466.284 3.426.852a5.688 5.688 0 0 1 2.233 2.37c.523 1.011.784 2.193.784 3.545 0 1.341-.26 2.52-.784 3.537a5.757 5.757 0 0 1-2.233 2.37c-.96.562-2.102.843-3.426.843zm.017-2.812c.603 0 1.105-.17 1.509-.512.403-.346.707-.818.912-1.414.21-.597.315-1.276.315-2.037 0-.762-.105-1.44-.315-2.037-.205-.597-.509-1.069-.912-1.415-.404-.347-.906-.52-1.509-.52-.608 0-1.119.173-1.534.52-.409.346-.718.818-.929 1.415-.204.596-.306 1.275-.306 2.037 0 .76.102 1.44.306 2.037.21.596.52 1.068.93 1.414.414.341.925.512 1.533.512zM72.625 47.508v2.728h-7.883v-2.727h7.883zm-6.093-3.136h3.63v12.205c0 .335.051.596.154.784.102.182.244.31.426.383.187.074.403.111.648.111.17 0 .34-.014.51-.042.171-.035.302-.06.393-.077l.571 2.702c-.182.056-.438.122-.767.195-.33.08-.73.128-1.202.145-.875.035-1.642-.082-2.3-.349a3.212 3.212 0 0 1-1.526-1.244c-.364-.563-.543-1.273-.537-2.131V44.372zM17.754 89.6V72.144H29.31v3.043h-7.867v4.159h7.1v3.042h-7.1v7.21h-3.69zM36.679 89.855c-1.324 0-2.47-.281-3.435-.844a5.775 5.775 0 0 1-2.224-2.369c-.523-1.017-.785-2.196-.785-3.537 0-1.352.262-2.534.785-3.545a5.705 5.705 0 0 1 2.224-2.37c.966-.568 2.11-.852 3.435-.852 1.323 0 2.465.284 3.426.852a5.689 5.689 0 0 1 2.233 2.37c.522 1.011.784 2.193.784 3.545 0 1.341-.262 2.52-.784 3.537a5.757 5.757 0 0 1-2.233 2.37c-.96.562-2.102.843-3.426.843zm.017-2.812c.602 0 1.105-.17 1.508-.512.404-.346.708-.818.912-1.415.21-.596.316-1.275.316-2.036 0-.762-.106-1.44-.316-2.037-.204-.597-.508-1.069-.912-1.415-.403-.347-.906-.52-1.508-.52-.608 0-1.12.173-1.534.52-.41.346-.72.818-.93 1.415-.204.596-.306 1.275-.306 2.037 0 .76.102 1.44.307 2.037.21.596.52 1.068.929 1.414.414.341.926.512 1.534.512zM53.877 84.026v-7.517h3.631v13.09h-3.486v-2.377h-.136a3.865 3.865 0 0 1-1.474 1.849c-.682.466-1.515.699-2.498.699-.875 0-1.645-.199-2.31-.597-.664-.397-1.184-.963-1.559-1.696-.37-.733-.557-1.61-.562-2.633v-8.335h3.63v7.687c.006.773.213 1.384.622 1.832.41.45.958.674 1.645.674.438 0 .847-.1 1.228-.299.38-.204.687-.505.92-.903.239-.398.355-.89.35-1.474zM64.043 82.031V89.6h-3.63V76.51h3.46v2.31h.153a3.652 3.652 0 0 1 1.457-1.808c.682-.448 1.509-.673 2.48-.673.91 0 1.702.199 2.378.597.676.397 1.202.966 1.577 1.704.375.733.563 1.608.563 2.625V89.6H68.85v-7.687c.006-.801-.2-1.426-.614-1.875-.415-.455-.986-.682-1.713-.682-.489 0-.92.105-1.295.316-.37.21-.66.516-.87.92-.204.398-.31.878-.315 1.44zM80.166 89.813a4.943 4.943 0 0 1-2.702-.767c-.801-.518-1.437-1.276-1.909-2.276-.466-1.006-.699-2.239-.699-3.699 0-1.5.242-2.747.725-3.741.483-1 1.125-1.748 1.926-2.242.807-.5 1.69-.75 2.65-.75.733 0 1.344.125 1.833.375.494.244.892.551 1.193.92.307.364.54.722.699 1.074h.11v-6.562h3.623v17.454h-3.58v-2.096h-.153c-.17.364-.412.724-.725 1.082-.306.353-.707.645-1.201.878-.489.233-1.086.35-1.79.35zm1.15-2.89c.586 0 1.08-.159 1.483-.477.41-.324.722-.775.938-1.355.222-.58.332-1.259.332-2.037s-.108-1.455-.324-2.028c-.216-.574-.528-1.017-.937-1.33-.41-.313-.906-.469-1.492-.469-.596 0-1.099.162-1.508.486-.41.324-.719.773-.93 1.347-.21.573-.314 1.238-.314 1.994 0 .761.105 1.435.315 2.02.216.58.525 1.034.929 1.364.409.323.912.485 1.508.485z' fill='%23fff'/%3E%3C/svg%3E";

// 覆盖ElementPlus组件的自定义样式名
const MESSAGE_BOX_CUSTOM_CLASS = 'mapedit-message-box';
const OVERLAY_CUSTOM_CLASS = 'mapedit-overlay';

export {
  LAYER,
  LAYER_LABEL,
  USER_LAYER,
  USER_LAYER_TO_LAYERS,
  INTERACTIVE_TYPE,
  INTERACTIVE_TYPE_LABEL,
  INTERACTIVE_TYPE_SVG,
  CELL_WIDTH,
  CELL_HEIGHT,
  MAX_CANVAS_SIZE,
  Tool,
  Mode,
  MaterialSource,
  SavingStatus,
  WallType,
  OBJECT_TYPE,
  layersDesc,
  layersAsc,
  fontSizeOptions,
  interactiveOptions,
  TRANSPARENT_1PX,
  FLOAT_OBJECT_OPACITY,
  HOVER_TILE_EFFECT_OPACITY,
  TILE_EFFECT_OPACITY,
  ACTIVE_TILE_EFFECT_OPACITY,
  NEW_LAYERS,
  NEW_LAYER_LABEL,
  nonIsolatedLayersDesc,
  isolatedLayersDesc,
  TextAlign,
  DEFAULT_LINE_HEIGHT,
  TileEffectType,
  ResourceType,
  ImageResourceSubtype,
  BROKEN_IMAGE_PLACEHOLDER,
  MESSAGE_BOX_CUSTOM_CLASS,
  OVERLAY_CUSTOM_CLASS,
};
