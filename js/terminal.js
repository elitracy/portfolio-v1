// colors = {
//   red: "[[;rgb(255, 173, 173);]",
//   orange: "[[;rgb(255, 214, 165);]",
//   yellow: "[[;rgb(253, 255, 182);]",
//   green: "[[;rgb(202, 255, 191);]",
//   teal: "[[;rgb(155, 246, 255);]",
//   blue: "[[;rgb(160, 196, 255);]",
//   purple: "[[;rgb(189, 178, 255);]",
//   magenta: "[[;rgb(255, 198, 255);]",
// };

colors = {
  red: "",
  orange: "",
  yellow: "",
  green: "",
  teal: "",
  blue: "",
  purple: "",
  magenta: "",
};

var argColors = [
  "-fullname",
  "-dob",
  "-grad",
  "-home",
  "-edu",
  "-major",
  "-hobbies",
  "-music",
  "-photo",
  "-ponchka",
  "-todo",
  "-dnd",
  "-carver",
  "-tutor",
  "-cString",
  "-spade",
  "-heap",
  "-dll",
  "-close",
  "-open",
  "-a",
  "-download",
];

var commandColors = [
  "projects",
  "elias",
  "resume",
  "tips",
  "skills",
  "about",
  "home",
];

// $.terminal.defaults.formatters.push(function (string) {
//   return string
//     .split(/((?:\s|&nbsp;)+)/)
//     .map(function (string) {
//       if (argColors.indexOf(string) != -1) {
//         return colors.red + string + "]";
//       } else if (commandColors.indexOf(string) != -1) {
//         return colors.green + string + "]";
//       } else {
//         return string;
//       }
//     })
//     .join("");
// });

tips = [
  "Did you know that Elias is left handed??",
  "Fun Fact - Haskell was invented by the Devil himself!",
  "Did you know that Elias has never actually won a game of Fortnite?",
  // "Birds aren't real! For more information look up Ronald Reagan Rule 34",
  "To see some of Elias' favorite things to do you can type 'elias -hobbies'",
  "Elias has a cat named Ponchka who has no tail!\nType elias -ponchka for a surprise...",
  "Interested in Elias' photography? Type 'elias -photo' to visit his photography website!",
  //"Interested in Elias' photography? Type 'elias -photo' to visit his photography website!",
  "Try using the built in calculator! Type 'math?' for help.",
  "Did you know Elias listens to music? Type 'elias -music for more info!",
];

projects = {
  todo: {
    Title: "Todo List App",
    Languages: [colors.green + "Python"],
    Description:
      "This app allows users to add and delete events from Google Calendar and \t\t\t\tcreate a Todo List on their computers using the Google Calendar API.",
    Link: "https://github.com/elitracy/Todo-List-App",
    Clone: "https://github.com/elitracy/Todo-List-App.git",
  },
  dnd: {
    Title: "Dungeons and Dragons Character Creator",
    Languages: [colors.red + "Java"],
    Description:
      "Peusdo-random character generator to help jumpstart Dungeons and Dragons adventures.",
    Link: "https://github.com/elitracy/Dungeons-and-Dragons-Character-Creator",
    Clone:
      "https://github.com/elitracy/Dungeons-and-Dragons-Character-Creator.git",
  },
  carver: {
    Title: "Image Carver",
    Languages: [colors.blue + "C++"],
    Description:
      "Smart photo cropping: Takes any ppm file (P3) and carves it to the \n\t\t\t  desired dimensions based on the energy of the pixels and the seams \n\t\t\t  created.",
    Link: "https://github.com/elitracy/Image-Carver",
    Clone: "https://github.com/elitracy/Image-Carver.git",
  },
  tutor: {
    Title: "Tutorfy",
    Languages: [
      colors.red + "Python",
      colors.magenta + "HTML",
      colors.teal + "CSS",
    ],
    Description:
      "This app allows students to find freelance tutors which can be filtered \t\t\t\tby class, major, location, and GPA. This app was created as a part of \n\t\t\t  Howdy Hack 2020.",
    Link: "https://github.com/elitracy/TutorApp",
    Clone: "https://github.com/elitracy/TutorApp.git",
  },
  cString: {
    Title: "C-String Calculator",
    Languages: [colors.blue + "C++"],
    Description:
      "Rebuilt C++ string library using primitive C-Strings. Using these custom \t\t\t\tstrings (my_string), I built a calculator that can take any number \n\t\t\t  (limited only by the size of memory) and do addition and subtraction.",
    Link: "https://github.com/elitracy/C-String-Calculator",
    Clone: "https://github.com/elitracy/C-String-Calculator.git",
  },
  spade: {
    Title: "Spade",
    Languages: [
      colors.yellow + "Javascript",
      colors.magenta + "HTML",
      colors.teal + "CSS",
    ],
    Description:
      "This node-js website allows users to buy and sell soil in bulk, \n\t\t\t  eliminating the middle man for many businesses and contractors.",
    Link: "https://github.com/elitracy/Spade",
    Clone: "https://github.com/elitracy/Spade.git",
  },
  heap: {
    Title: "Minimum Binary Heap",
    Languages: [colors.blue + "C++"],
    Description:
      "Class Project: created 3 different minimum priority queues, namely a \n\t\t\t  minimum binary heap to logarithmically sort and access input files of \n\t\t\t  varying sizes",
    Link: "https://github.com/elitracy/Minimum-Binary-Heap",
    Clone: "https://github.com/elitracy/Minimum-Binary-Heap.git",
  },
  dll: {
    Title: "Doubly Linked List Library",
    Languages: [colors.blue + "C++"],
    Description:
      "Class Project: Created a library management system using C++ templates \n\t\t\t  and doubly linked lists",
    Link: "https://github.com/elitracy/Doubly-Linked-List-Library",
    Clone: "https://github.com/elitracy/Doubly-Linked-List-Library.git",
  },
};

skills = {
  c: {
    skill: "C++",
    years: "2",
    level: 10,
  },
  python: {
    skill: "Python",
    years: "6",
    level: 10,
  },
  java: {
    skill: "Java",
    years: "3",
    level: 7,
  },
  html: {
    skill: "HTML",
    years: "3",
    level: 9,
  },
  css: {
    skill: "CSS",
    years: "3",
    level: 10,
  },
  linux: {
    skill: "Linux",
    years: "4",
    level: 8,
  },
  adobe: {
    skill: "Adobe",
    years: "8",
    level: 10,
  },
  javascript: {
    skill: "Javascript",
    years: "2",
    level: 6,
  },
};

$("#term").terminal(
  {
    add: function (a, b) {
      this.echo(a + b);
    },
    sub: function (a, b) {
      this.echo(a - b);
    },
    div: function (a, b) {
      this.echo(a / b);
    },
    multi: function (a, b) {
      this.echo(a * b);
    },
    "math?": function () {
      this.echo("add a b    |  a + b");
      this.echo("sub a b    |  a - b");
      this.echo("div a b    |  a / b");
      this.echo("multi a b  |  a * b");
    },
    tips: function () {
      this.echo(tips[Math.floor(Math.random() * tips.length)]);
    },
    help: function () {
      this.echo("Try using:\n");
      this.echo("projects   | view projects");
      this.echo("about      | get to know Elias");
      this.echo("resume     | view resume");
      this.echo("skills     | view skills");
      this.echo("tips       | see some somewhat helpful tips\n");
    },
    resume: function () {
      window.open("./images/eliasTracyResume.pdf");
    },
    projects: function (flag) {
      var flagFound = false;
      var projectFlags = [
        "-todo",
        "-dnd",
        "-carver",
        "-tutor",
        "-cString",
        "-spade",
        "-heap",
        "-dll",
      ];

      if (flag == "-a") {
        for (var p in projects) {
          this.echo("Title       | " + projects[p].Title);
          this.echo("Languages   | ", { newline: false });
          for (var l in projects[p].Languages) {
            this.echo(projects[p].Languages[l] + " ", { newline: false });
          }
          this.echo();
          this.echo("Description | " + projects[p].Description);
          this.echo("Link\t\t| " + projects[p].Link);
          this.echo(
            "-------------------------------------------------------------------------------------------"
          );
          // this.echo("Git Clone   | " + projects[flag].Clone);
          this.echo();
          flagFound = true;
        }
      } else {
        for (var f of projectFlags) {
          if (f == flag) {
            flag = flag.substring(1);
            this.echo();
            this.echo("Languages   | ", { newline: false });
            for (var l in projects[flag].Languages) {
              this.echo(projects[flag].Languages[l] + " ", { newline: false });
            }
            this.echo();
            this.echo("Description | " + projects[flag].Description);
            this.echo("Link\t\t| " + projects[flag].Link);
            // this.echo("Git Clone   | " + projects[flag].Clone);
            this.echo();
            flagFound = true;
          }
        }
        //list projects in form elias.projects.<project name>
        if (!flagFound) {
          this.echo(
            "Projects Flags:\n -todo\n -dnd\n -carver\n -tutor\n -cString\n -spade\n -heap\n -dll"
          );
          this.echo("Use 'projects -flag' to view a project");
          this.echo("Or use 'projects -a' to view all projects!");
        }
      }
    },
    elias: function (flag) {
      var hobbies = [
        "Nice walks on the beach",
        "Perhaps a good cup of coffee",
        "Taking photos! Type 'elias -photo' for more info...",
        "Roaming around Ikea",
        "Popping an absolutely gnarly kickflip",
        "Getting yoked at the gym",
        "Taking care of his plants",
        "A cool breeze on a nice hike",
      ];

      switch (flag) {
        case "-a":
          this.echo("Name:\n\t-Elias Tracy");
          this.echo("Date of Birth:\n\t-May 18, 2001");
          this.echo("Expected Graduation Date:\n\t-May 2023");
          this.echo("Hometown:\n\t-Dallas, Texas");
          this.echo(
            "Education:\n\t-Richardson High School\n\t-Texas A&M University"
          );
          this.echo("Major:\n\t-Computer Science");
          this.echo("Hobbies:");
          for (var h of hobbies) this.echo("\t-" + h);
          break;
        case "-fullname":
          this.echo("Elias Tracy");
          break;
        case "-dob":
          this.echo("Date of Birth: May 18, 2001");
          break;
        case "-grad":
          this.echo("Expected Graduation Date: May 2023");
          break;
        case "-home":
          this.echo("Hometown: Dallas, Texas");
          break;
        case "-edu":
          this.echo(
            'Education: ["Richardson High School", "Texas A&M University"]'
          );
          break;
        case "-major":
          this.echo("Major: Computer Science");
          break;
        case "-hobbies":
          for (var h of hobbies) this.echo("\t-" + h);
          break;
        case "-music":
          this.echo("Want to get to know me through music?");
          this.echo(
            "Follow me on Spotify! https://open.spotify.com/user/elitracy19"
          );
          break;
        case "-photo":
          window.open("https://elitracy19.wixsite.com/mysite");
          break;
        case "-ponchka":
          window.open("./images/ponchka.gif");
          break;
        default:
          this.echo(
            "Flags:\n\t-fullname\n\t-dob\n\t-grad\n\t-home\n\t-edu\n\t-major\n\t-hobbies\n\t-music\n\t-photo"
          );
          this.echo("Use 'elias -flag' to learn more about Elias");
          this.echo("Or use 'elias -a' to see everything about me!");
      }
    },
    skills: function () {
      for (var s in skills) {
        this.echo(skills[s].skill.padStart(10) + " |", { newline: false });
        for (var i = 0; i < skills[s].level; i++) {
          if (skills[s].level > 8)
            this.echo(colors.green + "=", { newline: false });
          else if (skills[s].level > 3)
            this.echo(colors.magenta + "=", { newline: false });
        }
        this.echo("|" + skills[s].level);
      }
    },
    about: function () {
      this.echo("Type elias to learn more about Elias!");
    },
    contact: function () {
      this.echo("Email:\n\t-elitracy19@gmail.com\n\t-elitracy@tamu.edu");
      this.echo("Number: (972) - 976 - 7453 ");
      this.echo("Instagram: https://instagram.com/eli_tracy");
      this.echo("Github: https://github.com/elitracy");
    },
    ls: function () {
      this.echo(
        "If only I was a real terminal ... maybe one day I'll get there."
      );
      this.echo(colors.magenta + "Use 'help' to get some useful commands!");
    },
    cd: function () {
      this.echo("Sorry brother, there are no directories here.");
    },
    mkdir: function () {
      this.echo("I thought we already talked about this");
      this.echo("Speaking of about, type 'about' to learn more about me!");
    },
    home: function () {
      window.open("../index.html", "_self");
    },
  },
  {
    greetings:
      "How's it going, I'm Elias, welcome to my website!\nUse 'help' to get started.\n",
    prompt: ">> ",
    checkArity: false,
    // autocompleteMenu: true,
    tabcompltetion: true,
    completion: argColors.concat(commandColors),
    exit: true,
  }
);
