var $bttn = $("button");
var $list = $("ul");
var $image = $("img")
//................First Method...................................

// $bttn.on("click",()=>{
//     $bttn.remove();
//     setTimeout(() => {
//         $list.append("<li>You're a great Friend</li>")
//     }, 1000);
//     setTimeout(() => {
//         $list.append("<li>Today's Your Birthday</li>")
//     }, 2500);
//     setTimeout(() => {
//         $list.append("<li> Wishing You All The Best</li>")
//     }, 3600);
//     setTimeout(() => {
//         $("li").text("🎉HAPPY🎀BIRTHDAY!!🎉")
//         $("body").css("background","url(../banners-2026059__340.webp)")
//     }, 4500);
// });

//................Second Method...................................
$bttn.on("click", () => {
  $bttn.remove();
 $image.remove();
  $list.append("<li id=first>You're a great Friend</li>");
  $("li#first").on("click", () => {
    $list.append("<li id=second>Today's Your Birthday</li>");
    $("li#second").on("click", () => {
      $list.append("<li id=third>Wishing You All The Best</li>");
      $("li#third").on("click", () => {
        $("li").text("🎉HAPPY🎀BIRTHDAY!!🎉");
        $("body").css("background", "url(../banners-2026059__340.webp)");
      });
    });
  });
});

