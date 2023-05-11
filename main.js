var canvas = new fabric.Canvas('myCanvas')

function new_image(get_image)
{
        fabric.Image.fromURL(get_image, function(Img) {
            block_image_object = Img;
            block_image_object.scaleToWidth(block_image_width);
            block_image_object.scaleToHeight(block_image_Height);
            block_image_object.set({top:block_y,left:block_x});
            canvas.add(block_image_object);
        });
}

if(keyPressed == '82')
{
    block_x = 10;
    new_image('pa.jpeg');
    console.log('R')
}
if(keyPressed == '71')
{
    block_x = 310;
    new_image('pal.png');
    console.log('G')
}
if(keyPressed == '89')
{
    block_x = 560;
    new_image('pali.png');
    console.log('Y')
}
if(keyPressed == '80')
{
    block_x = 880;
    new_image('p.jpeg');
    console.log('P')
}
if(keyPressed == '66')
{
    block_x = 1040;
    new_image('palism.jpeg');
    console.log('B')
}