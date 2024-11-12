document.addEventListener("DOMContentLoaded", function (event) {
    const characterObject = {
      gomez: "https://www.humbledrive.com/static/images/gomez.png",
      morticia:
        "https://i.ibb.co/Bs3JzSh/Full-body-image-of-Morticia-Addams-from-the-Addams-family-done-in-a-Pixar-3d-animation-style-You-can.png",
      wednesday:
        "https://i.ibb.co/6bvjFCK/Full-body-image-of-Wednesday-Addams-from-the-Addams-family-done-in-a-Pixar-3d-animation-style-You-ca.png",
      pugsley:
        "https://i.ibb.co/sVqCQhR/Full-body-image-of-Pugsley-Addams-from-the-Addams-family-done-in-a-Pixar-3d-animation-style-You-can.png",
      uncleFester:
        "https://i.ibb.co/C29grP1/Full-body-image-of-Uncle-Fester-Addams-from-the-Addams-family-done-in-a-Pixar-3d-animation-style-You.png",
      grandmama:
        "https://i.ibb.co/p0dbL9D/Full-body-image-of-Grandmama-Addams-from-the-Addams-family-done-in-a-Pixar-3d-animation-style-You-ca.png",
      lurch:
        "https://i.ibb.co/F30NP2d/Full-body-image-of-Lurch-Addams-from-the-Addams-family-done-in-a-Pixar-3d-animation-style-You-can-se.png",
      thing: "https://i.ibb.co/8gwWLmq/ajv3eguk-removebg-preview.png",
      cousinIt:
        "https://i.ibb.co/vHb5SPc/Cousin-Itt-is-a-small-moving-mass-of-thick-flowing-hair-that-nearly-touches-the-ground-In-the-Tim-Bu.png",
      chandelier:
        "https://i.ibb.co/sgBdLYG/An-Addams-family-style-Chandelier-in-a-Pixar-3-D-animation-style-3692793394.png"
    };
  
    const characterInfo = {
      gomez: {
        name: "Gomez Addams",
        description:
        "O encantador patriarca com uma queda por esgrima e bigodes extravagantes.",
        stats: {
          "Movimentos de Dança": "8/10 💃",
          "Estilo do Bigode": "10/10 🎯",
          "Habilidades de Investimento": "Infinito 📈",
          "Esgrima com Bengala": "Mestre ⚔️",
          "Senso de Humor": "Mortal 😆"
        }
      },
      morticia: {
        name: "Morticia Addams",
        description: "A elegante matriarca que floresce nas noites mais sombrias.",
        stats: {
          "Estética Sombria": "10/10 🖤",
          "Conhecimento de Plantas Venenosas": "9/10 🌿",
          "Votos Mortais": "Eterno 💍",
          "Nível de elegância": "Supremo 👗",
          "Aura de Mistério": "Enigmática 🔮"
        }
      },
      wednesday: {
        name: "Wandinha Addams",
        description:
          "A filha curiosamente mórbida com um lado doce (às vezes).",
        stats: {
          "Coleção de Bonecas Mortais": "Impressionante 🧸",
          "Controle Mental": "Nível Máximo 🧠",
          "Olhar Assustador": "Imparável  👀",
          "Domínio da Espada": "Especialista ⚔️",
          "Nível de Sarcasmo": "Pico 🗯️"
        }
      },
      pugsley: {
        name: "Feioso Addams",
        description: "O filho travesso que encontra alegria no caos e na criatividade.",
        stats: {
          "Montagem de Armadilhas": "Genial! 🧠",
          Criatividade: "Brilhante 💡",
          Resiliência: "Inquebrável 💪",
          "Pegadinhas com Irmãos": "Lendário 🤡",
          "Intensidade da Risada": "Maníaca 😂"
        }
      },
      grandmama: {
        name: "Vovó Addams",
        description:
          "A mística avó com talento para poções e feitiços.",
        stats: {
          "Preparo de Poções": "Especialista 🍵",
          "Lançamento de Feitiços": "Avançado ✨",
          "Conhecimento de Ervas": "Extenso 🌿",
          "Leitura na Bola de Cristal": "Precisa 🔮",
          "Volume da Gargalhada": "Trovejante 🗣️"
        }
      },
      uncleFester: {
        name: "Tio Chico",
        description: "O excêntrico tio que ilumina o ambiente (literalmente).",
        stats: {
          "Eficiência com Lâmpadas": "Infinita 💡",
          "Alcance do Choque Elétrico": "Amplo ⚡",
          "Frequência de bate-cabeça": "Alta 🤘",
          "Origem Misteriosa": "Críptica 🕵️‍♂️",
          "Unicidade da Risada": "Icônica 😂"
        }
      },
      lurch: {
        name: "Tropeço",
        description: "O imponente mordomo cujo “Você chamou?” é lendário.",
        stats: {
          "Dedicação ao Serviço": "Inigualável 🤵",
          "Controle de Volume": "Alto 📢",
          Força: "Sobre-humana 💪",
          "Entonação Séria": "Perfeita 😐",
          "Habilidade com Elevador": "Dominada ✔"
        }
      },
      thing: {
        name: "Mãozinha",
        description:
          "A mão desmembrada sempre pronta para ajudar (ou assustar).",
        stats: {
          "Multitarefas": "Excepcional 🤲",
          "Movimentos Furtivos": "Invisível 🕵️‍♀️",
          "Fator Surpresa": "Alto 😱",
          Destreza: "Flexível 🤸",
          Expressividade: "Intrigante ✋"
        }
      },
      cousinIt: {
        name: "Primo It",
        description:
          "O primo cabeludo cujo murmúrio é tão misterioso quanto sua aparência.",
        stats: {
          "Volume do Cabelo": "Incontrolável 🧔",
          Velocidade: "Rápido 🏃‍♂️",
          Agilidade: "Ágil 🏋️‍♂️",
          "Coerência do Murmúrio": "Críptica 🗣️",
          "Fator fofura": "Surpreendentemente Alto 😍"
        }
      }
    };
  
    const elementsObject = {};
  
    const characterContainer = document.getElementById("character-container");
  
    const characters = Array.from(characterContainer.querySelectorAll("img"));
  
    characters.forEach((character) => {
      const characterId = character.id;
      if (characterObject[characterId]) {
        character.src = characterObject[characterId];
        elementsObject[characterId] = document.getElementById(characterId);
  
        elementsObject[characterId].addEventListener("click", function (event) {
          featureCharacter(this.id);
        });
      } else {
        console.log(`Personagem "${characterId}" não encontrada em characterObject.`);
      }
    });
  
    gsap.from("#the", {
      duration: 2,
      x: -200,
      opacity: 0,
      ease: "power2.out"
    });
  
    gsap.from("#addams-title", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 1 
    });
  
    gsap.to("#chandelier", {
      duration: 2,
      filter: "brightness(250%)",
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1 
    });
  
    characters.forEach((character) => {

      character.addEventListener("mouseenter", () => {
        gsap.to(character, {
          duration: 0.3,
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(255, 99, 71, 0.7)",
          ease: "power1.out"
        });
      });
  
      character.addEventListener("mouseleave", () => {
        gsap.to(character, {
          duration: 0.3,
          scale: 1,
          boxShadow: "0px 0px 0px rgba(255, 99, 71, 0.5)",
          ease: "power1.out"
        });
      });
    });
  
    function featureCharacter(id) {
      console.log(id);
  
      const info = characterInfo[id];
      if (!info) {
        console.log(`Não há informações disponíveis sobre a personagem: ${id}`);
        return;
      }
  
      document.getElementById("characterModalLabel").innerText = info.name;
      document.getElementById("characterDescription").innerText =
        info.description;
  
      const statsList = document.getElementById("characterStats");
      statsList.innerHTML = ""; // limpa stats anterior

      for (let stat in info.stats) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${stat}:</strong> ${info.stats[stat]}`;
        statsList.appendChild(li);
      }
  
      const characterModal = new bootstrap.Modal(
        document.getElementById("characterModal"),
        {
          keyboard: true
        }
      );
      characterModal.show();
  
      document
        .getElementById("characterModal")
        .addEventListener("shown.bs.modal", () => {
          gsap.fromTo(
            ".modal-content",
            { scale: 0.8, opacity: 0 },
            { duration: 0.5, scale: 1, opacity: 1, ease: "back.out(1.7)" }
          );
        });
  
      document
        .getElementById("characterModal")
        .addEventListener("hide.bs.modal", () => {
          gsap.to(".modal-content", {
            duration: 0.3,
            scale: 0.8,
            opacity: 0,
            ease: "power1.in"
          });
        });
    }
  });
  