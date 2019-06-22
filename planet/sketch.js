let x_sun,y_sun,xv_sun,yv_sun,mass_sun,radius_sun;
let x_planet,y_planet,xv_planet,yv_planet,mass_planet,radius_planet;

let trails = false;

 let G = 0.1;


function setup()
{
  createCanvas(300,300);
  background(0);

  x_sun = width/2;
  y_sun = height/2;
  mass_sun = 10000;
  radius_sun = pow(mass_sun,1.0/3);

  x_planet = 3.0 * width / 4;
  y_planet = height/2;
  xv_planet = 0;
  yv_planet = random(-8,8);
  mass_planet = 10;
  radius_planet = pow(mass_planet,1.0/3);

}

function draw()
{
  if (! trails)
  {
    background(0);
  }

  fill(255,255,0);
  stroke(255,255,0);
  ellipse(x_sun,y_sun,2*radius_sun,2*radius_sun);
  let r = sqrt( pow((x_sun-x_planet),2) + pow((y_sun-y_planet),2));
  let theta = atan((y_sun-y_planet)/(x_sun-x_planet));
  if (x_planet > x_sun)
  {
    theta = theta + PI;
  }
  let acceleration = G * (mass_sun / pow(r,2));
  xv_planet = xv_planet + acceleration * cos(theta);
  yv_planet = yv_planet + acceleration * sin(theta);

  x_planet = x_planet + xv_planet;
  y_planet = y_planet + yv_planet;

  fill(255,255,255);
  stroke(255,255,255);
  ellipse(x_planet,y_planet,2*radius_planet,2*radius_planet);


}
