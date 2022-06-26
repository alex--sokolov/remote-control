# Remote-control
> RSSchool NodeJS websocket task.

## Installation
1. Clone/download repo

`git clone https://github.com/alex--sokolov/remote-control.git`
2. Install node modules

`npm install`
3. Set ports

Rename `.env-example` to `.env`.

Change `HTTP_PORT` and `WSS_PORT` to whatever you want.

If not specified default values wil be:

`HTTP_PORT = 4000`
`WSS_PORT = 8080`

## Usage

1. Run app


**Development**

`npm run start:dev`

* App served with ts-node-dev

**Production**

`npm run start`

* App served without webpack (output files wouldn't be bundled and minified)

`npm run start:prod`

* App served with webpack (output files will be bundled and minified)

2. Open `localhost:HTTP_PORT`

3. If your `WSS_PORT` is different from `8080`, specify correct web socket URL (`localhost:WSS_PORT`) and press Submit button

4. Try the commands below and see what happens

5. Have a good day! ;)

---

**All commands**

Command | Key | Description
--- |-----| ---
Move mouse up (`mouse_up {y px}`)| ↑   | Mouse will move up on specified mouse control offset (px)
Move mouse down (`mouse_down {y px}`) | ↓   | Mouse will move down on specified mouse control offset (px)
Move mouse left (`mouse_left {x px}`) | ←   |Mouse will move left on specified mouse control offset (px)
Move mouse right (`mouse_right {x px}`) | →   | Mouse will move right on specified mouse control offset (px)
Send mouse coordinates (`mouse_position`) | p   | Mouse position will be shown in the respective area ({x px},{y px})
Draw circle with pushed left button (`draw_circle {px}`) | c   | Circle will be drawn with specified radius (px)
Draw rectangle with pushed left button (`draw_rectangle {px} {px}`) | r   | Rectangle will be drawn with specified width and height ({x px},{y px})
Draw square with pushed left button (`draw_square {px}`) | s   | Square will be drawn with specified side length (px)
Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position) (`prnt_scrn`) | LCtrl+p | Print screen of 200px around mouse position will appear in the respective area

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.