function frasesChidas(){	
			
  var frase = [{"cita":"La creatividad es simplemente conectar cosas.Cuando preguntas a gente creativa cómo hicieron algo, se sienten algo culpables porque realmente no lo saben, simplemente vieron algo. Parecía obvio para ellos tras un rato. Eso es porque eran capaces de conectar experiencias que habían tenido y de sintetizar nuevas cosas.",
			    "autor":"Steve Jobs"
			   },
			   {"cita":"Una verdadera obra de arte habla inmediatamente con el espectador. El espectador debe reaccionar inmediatamente a la obra de arte.",
				"autor":"Vasily Kandinsky"
			   },
			   {"cita":"Todo lo que te rodea que llamas vida fue hecho por gente que no era más inteligente que tú.",
			    "autor":"Steve Jobs"
			   },	
				{"cita":"La vida consiste en lograr un impacto, no en hacer dinero.",
				 "autor":"Kevin Kruse"	 
				}, 
				{"cita":"Los dos días más importantes de tu vida son el día que naces y el día que descubres para qué naciste. ",
				 "autor":"Mark Twain"	 
				}, 
				{"cita":"Construye tus sueños o alguien más te contratará para construir el suyo.",
				 "autor":"Farrah Gray"	 
				}, 
				{"cita":"Sueña en grande y atrévete a fracasar.",
				 "autor":"Norman Vaughan"
				}
  ];
		
  var fraseAleatoria = Math.floor(Math.random()*frase.length);		
  document.getElementById("frases").innerHTML = frase[fraseAleatoria].cita;
  document.getElementById("autores").innerHTML = frase[fraseAleatoria].autor;
}
		   
function coolQuotes(){
  
  var phrase = [{"cita":"When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
				"autor":"Steve Jobs"
				},
				{"cita":"A true work of art speaks immediately to the spectator. The spectator should immediately respond to the work of art.",
						"autor":"Vasily Kandinksy"
				},
				{"cita":"Everything around  you that you call life was made up by people that were no smarter than you.",
				 "autor":"Steve Jobs"
				},
				{"cita":"Life is about making an impact, not making an income.",
				 "autor":"Kevin Kruse"
				},
				{"cita":"The two most important days in your life are the day you are born and the day you find out why."
				,"autor": "Mark Twain"
				},
				{"cita":"Build your own dreams, or someone else will hire you to build theirs.",
				 "autor":"Farrah Gray"
				},
				{"cita":"Dream big and dare to fail",
				 "autor":"Norman Vaughan"} 
  ];
						
  var randomPhrase= Math.floor(Math.random()*phrase.length);    
  document.getElementById("phrases").innerHTML = phrase[randomPhrase].cita; 
  document.getElementById("autors").innerHTML = phrase[randomPhrase].autor;     
}
