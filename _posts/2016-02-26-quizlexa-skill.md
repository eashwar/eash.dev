---
title: Quizlexa computer
layout: post
---
Made on {{ page.date | date: "%b %-d, %Y" }}
## [Quizlexa]({{page.url}})

This is an (unpublished) skill for the Amazon Echo which allows the user to practice Quizlet flash cards auditorally with Alexa, made during Spartahack 2.

<!--more-->

#### [You can check out the DevPost submission for the project here, which contains links to both the webapp and skill components of the project!](https://devpost.com/software/quizlexa){:target="blank"}{:rel="noopener"}

On the weekend of February 26, 2016, I participated in the second [Spartahack](https://spartahack.com/) hackathon at Michigan State University. This was during my junior year of high school, and it was my first ever hackathon experience. Along with 3 other friends from my high school, we created a skill for the Amazon Echo that created the ability to read from sets of Quizlet flash cards.

The skill requires the use of a companion webapp, from which you pick and choose Quizlet flash card sets to add to Quizlexa's Firebase database, tagging the card set with a keyword category. From there, Alexa is able to read cards to you from the set you ask it, asking you a multiple choice question: "The front of the card says Turkey. Does the back of the card say a: Ankara, or b: Budapest?"
