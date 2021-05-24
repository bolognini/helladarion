# Helladarion 🔮

<p align="center"><img src="icon.png" alt="T20 Bestiary Logo" width="60"></p>
<p align="center">&laquo;<b>A BFF API to help building an enemy sheet for Tormenta20 RPG system.</b>&raquo;</p>
<p align="center">Helladarion is a Backend for Frontend API that get and send data to a form and a virtual sheet for Tormenta20 RPG System with the help of a Firebase database</p>
<br />
<br />

## Description

Helladarion was created as an auxiliary tool for the Tormenta20 campaign I was playing with my friends. I used it to help me as a Dungeon Master and it works only with [Tormenta20 RPG System](https://tormentarpg.com.br/), a pretty cool Brazilian RPG System.
### What's that about?

As a Dungeon Master, you have to prepare a lot of enemies for your campaign. This project helps you by organizing the important data where you create and digitally update the enemy stats, removing the need to jumping from page to page on Tormenta20 book to check the enemy specifications.

Do you want to create a new enemy? Just type all its data on [Helladarion Form](https://helladarion-form.netlify.app/) and it'll render on [Helladarion Codex](https://helladarion-form.netlify.app/) the way you want. You use enemies already created on the book but you constantly customize them on a .txt file? This virtual sheet can update every data by editing the initial stats.

### Hella-what?

[Helladarion](https://tormenta.fandom.com/pt/wiki/Helladarion) is an artifact created by Tanna-Toh, god of knowledge from Tormenta20 RPG System. This artifact holds all the knowledge of Arton, the fantasy world of this system. The joke here is like you're some priest feeding the artifact knowledge by reporting the stats of new creatures.

## Project

This project is a Typescript and Node.js study. It serve both the projects: [Helladarion Form](https://github.com/bolognini/helladarion-form) and [Helladarion Codex](https://github.com/bolognini/helladarion-codex) by getting and sending data from and to a Firebase database.

Helladarion has just three endpoints to receive data and create a new entry on the database.

**GET** - `/monster/:id`
**POST** - `/monster/create`
**PUT** - `/monster/update`

### Installing

To run the project on development mode, you just need an LTS Node version installed (v14 or higher recommended), and Yarn for managing the packages. If you haven't it yet, you can follow the [Yarn installation guide](https://classic.yarnpkg.com/pt-BR/docs/install/), on their official page.

With Node and Yarn installed, run the commands below. They will clone the project on the current folder, download all the project dependencies and, in a few minutes, the project can be accessed by Insomnia, Postman on any program like that to send HTTP requests on the port `:3333`.

```shell
git clone https://github.com/bolognini/helladarion.git
cd helladarion
yarn && yarn dev:server
```

### Built With

* [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript
* [Heroku](https://www.heroku.com/about) - For CI/CD and deployment
* [Firebase](https://firebase.google.com/) - The database

<hr />

Helladarion is in its very first release version, which means it has a lot to improve. Since this is something really small and it's used as an auxiliary personal tool I decided to take it easy. This is also the first API I finished the development, so it indeed has a lot of improvements that can be developed. 

If you use it and found some bug, have some suggestions to improve it, please feel free to open an issue or send a Pull Request. This is an open-source project! ✌️

I do not own the rights of anything related to the Tormenta20 RPG System. All the rights are reserved and owned by [Jambô Editora](https://jamboeditora.com.br/).
