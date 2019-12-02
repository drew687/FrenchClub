function french() {
  var french = "Le club français se rendra dans différentes écoles d’Elémentry et présentera des spectacles de marionnettes en français.";
  var french2 = "Le babillard est l'endroit où nous allons mettre l'information mensuelle en français. Les choses que nous mettons sur le tableau bulltin sont le mot français, la phrase française et le pays français.";
  var french3 = "Les étudiants du club français sont des personnes qui veulent en savoir plus sur la culture française que ce qu’ils apprennent déjà en classe. Ils profitent de leur temps avec d'autres personnes partageant les mêmes intérêts. Les membres aiment participer à la culture française avec des amis qui veulent aussi s'amuser. Tout le monde dans le club aime se réunir et participer à des activités amusantes. Le club a beaucoup de gens qui acceptent et qui sont ouverts à de nouvelles amitiés.";
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
