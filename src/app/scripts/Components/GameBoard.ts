import 'pixi.js';
import {RenderableElement} from "../Utilities/RenderableElement";
import Texture = PIXI.Texture;
import DisplayObject = PIXI.DisplayObject;
import Container = PIXI.Container;
import Graphics = PIXI.Graphics;


export class GameBoard implements RenderableElement{
    public static readonly ROWxCOLUMN:[number, number] = [6, 7];
    public static readonly COIN_MARGIN = 20;
    public static readonly COIN_DIAMETER = 60;
    public static readonly BOARD_PADDING = 20;
    public static readonly BOARD_WIDTH = 580;
    public static readonly BOARD_HEIGHT = 500;
    public static readonly BOARD_MARGIN_TOP = 50;

    private _boardSprite:PIXI.Sprite;
    private get boardSprite(): PIXI.Sprite {
        if(this._boardSprite)
            return this._boardSprite;

        let texture = PIXI.loader.resources["./app/images/board.png"].texture;
        let sprite = new PIXI.Sprite(texture);
        sprite.width = GameBoard.BOARD_WIDTH;
        sprite.height = GameBoard.BOARD_HEIGHT;
        sprite.position.y = GameBoard.BOARD_MARGIN_TOP;

        this._boardSprite = sprite;
        return sprite;
    }


    public getStage():PIXI.Container{
        let stage = new PIXI.Container();
        stage.addChild(this.boardSprite);
        return stage;
    }

    public static getCenter(row: number, column: number): PIXI.Point{
        // The bottom row has index of 0
        let x =
            GameBoard.BOARD_PADDING
            + GameBoard.COIN_DIAMETER/2
            + row * (GameBoard.COIN_MARGIN + GameBoard.COIN_DIAMETER);
        let y =
            GameBoard.BOARD_MARGIN_TOP
            + GameBoard.BOARD_PADDING
            + GameBoard.COIN_DIAMETER/2
            + (GameBoard.ROWxCOLUMN[1] - column)*(GameBoard.COIN_DIAMETER + GameBoard.COIN_MARGIN);

        return new PIXI.Point(x, y);
    }
}