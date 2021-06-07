var canvas = new fabric.Canvas("myCanvas");

block_img_height = 30;
block_img_width = 30;

playerx = 10;
playery = 10;

var block_img_object = " ";
var player_obj = " ";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        
        player_obj= Img;
        player_obj.scaleToWidth(140);
        player_obj.scaleToHeight(150);
        player_obj.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_obj);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_img_object);
    })
}