/*Start to translate the activites page*/
function french() {
  var french = "Le club français se rendra dans différentes écoles d’Elémentry et présentera des spectacles de marionnettes en français.";
  var french2 = "Le babillard est l'endroit où nous allons mettre l'information mensuelle en français. Les choses que nous mettons sur le tableau bulltin sont le mot français, la phrase française et le pays français.";
  var active = document.getElementById("activities1").innerHTML;
  var active2 = document.getElementById("activities2").innerHTML;
  if (active !== french) {
    document.getElementById("activities1").innerHTML = french;
  } else {
    document.getElementById("activities1").innerHTML = "The French Club will be going to different Elementry schools and performing puppet shows in French.";
  }
  if (active2 !== french2) {
    document.getElementById("activities2").innerHTML = french2;
  } else {
    document.getElementById("activities2").innerHTML = "The bulletin board is where we are going to put the monthly information in French. Things we are putting on the bulltin board is the French word, French phrase, and French country.";
  }
}
/*end to translate the activites page*/
/*Start of translating Testimonial page*/
function frenchtest() {
  var frencht1 = "'French Club est un endroit agréable pour les passionnés d’apprentissage du français.'";
  var frencht2 = "'Le club français est un excellent moyen de rester en contact avec la langue et la culture françaises. Aussi, vous pouvez faire des activités vraiment amusantes et son ensemble est un club très amusant pour être en dehors de.''";
  var frencht3 = "'French Club est un endroit formidable pour pratiquer le français, se renseigner sur la cuisine française et s’amuser avec ses amis.'";
  var frencht4 = "'French Club est un endroit amusant pour en apprendre plus sur la France! Nous avons différentes activités et la pratique est française.'";
  var activet1 = document.getElementById("test1").innerHTML;
  var activet2 = document.getElementById("test2").innerHTML;
  var activet3 = document.getElementById("test3").innerHTML;
  var activet4 = document.getElementById("test4").innerHTML;
  if (activet1 !== frencht1) {
    document.getElementById("test1").innerHTML = frencht1;
  } else {
    document.getElementById("test1").innerHTML = "'French Club is a nice place for people who are passionate about learning French.'";
  }
  if (activet2 !== frencht2) {
    document.getElementById("test2").innerHTML = frencht2;

  } else {
    document.getElementById("test2").innerHTML = "'The French Club is a great way to keep up with the french language and culture. Also you can do some really fun activites and its overall a very fun club to be apart of.'";
  }
  if (activet3 !== frencht3) {
    document.getElementById("test3").innerHTML = frencht3;

  } else {
    document.getElementById("test3").innerHTML = "'French Club is a great place to practice your French, learn about French food, and have fun with your friends.'";
  }
  if (activet4 !== frencht4) {
    document.getElementById("test4").innerHTML = frencht4;

  } else {
    document.getElementById("test4").innerHTML = "'French Club is a fun place to learn more about France! We get to do different activites and practice are french.'";
  }
}
/*End of translating Testimonial page*/



function membersfrench() {
  var french3 = "Les étudiants du club français sont des personnes qui veulent en savoir plus sur la culture française que ce qu’ils apprennent déjà en classe. Ils profitent de leur temps avec d'autres personnes partageant les mêmes intérêts. Les membres aiment participer à la culture française avec des amis qui veulent aussi s'amuser. Tout le monde dans le club aime se réunir et participer à des activités amusantes. Le club a beaucoup de gens qui acceptent et qui sont ouverts à de nouvelles amitiés.";
  var active3 = document.getElementById("members").innerHTML;
  if (active3 !== french3) {
    document.getElementById("members").innerHTML = french3;
  } else {
    document.getElementById("members").innerHTML = "The students of French club are people who want to learn more about French culture than what they already learn in their classes. They enjoy their time with other people who have the same interests as they do. The members like taking part in French culture with friends that want to have fun also. Everyone in the club likes to come together and participate in fun activites. The club has many people that are accepting and who are open to new friendships.";
  }
}

function aboutfrench() {
  var frenchab = "Pendant cette année scolaire 2019-20, le cercle français présente des spectacles de marionnettes. Nous faisons nos poupées et le théâtre, nous écrivons de petits dialogues et des pièces, et nous allons les présenter à nos camarades de Madison, aux écoliers de Jackson et à la communauté. Aussi, nous voyons des films, nous parlons français, nous faisons la cuisine, nous jouons à des jeux français, et nous sortons aux restaurants francophones et à Starbuck’s. Voudriez-vous améliorer votre français et vous faire des amis pour la vie ? Joignez-vous à nous! ";
  var activeab = document.getElementById("about").innerHTML;
  if (activeab !== frenchab) {
    document.getElementById("about").innerHTML = frenchab;
  } else {
    document.getElementById("about").innerHTML = "For this school year, 2019-20, the French Club is presenting puppet shows. We are making our puppets and our theater, we are writing sketches and plays, and we will present them to our Madison classmates, to schoolchildren in Jackson,and to the larger community. We also watch films, speak French, cook, eat, play games, and go to French-speaking restaurants and to Starbuck’s. Would you like to improve your French and make lifelong friends? Join us!";
  }
}
