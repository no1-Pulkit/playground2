function isTouching(anyrect1,anyrect2){
    if (anyrect1.x - anyrect2.x < anyrect2.width/2 + anyrect1.width/2
      && anyrect2.x - anyrect1.x < anyrect2.width/2 + anyrect1.width/2
      && anyrect1.y - anyrect2.y < anyrect2.height/2 + anyrect1.height/2
      && anyrect2.y - anyrect1.y < anyrect2.height/2 + anyrect1.height/2) {
   return true;
  }
  else {
   return false;
  }
  }