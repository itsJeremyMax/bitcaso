A NestJS based server that uses Puppeteer behind the scenes to generate images from code.

The api can be accessed via a Post request to `localhost:3000/api/generate`

The request should include:
- `code` The code you want to render (If the browser can render it, it'll work. That means Bootstrap, Google Fonts, etc all will work. Just include the script tags!)
- `type` The image type (Can be either "jpeg" or "png")
- `height` The height of the image in px (Constraint: 10px - 10,000px)
- `width` The width of the image in px (Constraint: 10px - 10,000px)


