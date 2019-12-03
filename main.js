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

function frenchtest() {
  var frencht1 = "French";
  var frencht2 = "French";
  var frencht3 = "French";
  var frencht4 = "French";

  var activet1 = document.getElementById("test1").innerHTML;
  var activet2 = document.getElementById("test2").innerHTML;
  var activet3 = document.getElementById("test3").innerHTML;
  var activet4 = document.getElementById("test4").innerHTML;
  if (activet1 !== frencht1) {
    document.getElementById("test1").innerHTML = frencht1;
  } else {
    document.getElementById("test1").innerHTML = "French Club is a nice place for people who are passionate about learning French";
  }
  if (activet2 !== frencht2) {
    document.getElementById("test2").innerHTML = frencht2;

  } else {
    document.getElementById("test2").innerHTML = "The French Club is a great way to keep up with the french language and culture. Also you can do some really fun activites and its overall a very fun club to be apart of";
  }
  if (activet3 !== frencht3) {
    document.getElementById("test2").innerHTML = frencht3;

  } else {
    document.getElementById("test2").innerHTML = "French Club is a great place to practice your French, learn about French food, and have fun with your friends.";
  }if (activet4 !== frencht4) {
    document.getElementById("test2").innerHTML = frencht4;

  } else {
    document.getElementById("test2").innerHTML = "French Club is a fun place to learn more about France! We get to do different activites and practice are french.";
  }
}




function membersfrench(){
  var french3 = "Les étudiants du club français sont des personnes qui veulent en savoir plus sur la culture française que ce qu’ils apprennent déjà en classe. Ils profitent de leur temps avec d'autres personnes partageant les mêmes intérêts. Les membres aiment participer à la culture française avec des amis qui veulent aussi s'amuser. Tout le monde dans le club aime se réunir et participer à des activités amusantes. Le club a beaucoup de gens qui acceptent et qui sont ouverts à de nouvelles amitiés.";
    var active3 = document.getElementById("members").innerHTML;
  if (active3 !== french3) {
    document.getElementById("members").innerHTML = french3;
  } else {
    document.getElementById("members").innerHTML = "The students of French club are people who want to learn more about French culture than what they already learn in their classes. They enjoy their time with other people who have the same interests as they do. The members like taking part in French culture with friends that want to have fun also. Everyone in the club likes to come together and participate in fun activites. The club has many people that are accepting and who are open to new friendships.";
  }
}
