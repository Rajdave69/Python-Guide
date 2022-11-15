import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/PYCButton";

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="Raj's Python Guide"
      description="The Official Guide for Pycord"
    >
      <PYCHero
        title="Raj's Python Guide"
        subtitle="Learn how to program in Python"
        hasLogo={false}
      />
      <main className="content-wrap--home-page">
        Hello and welcome to this Python Guide. I've created and maintained this in my free time,
        primarily because a lot of people IRL ask me how to program in Python, and I thought it would be
        a good idea to create a info-rich guide for them. I hope you enjoy it!
        <br /> <br />
        Whether you are a newbie or an experienced developer, you will find
        everything you need to know about Python here. This guide will teach
        you:
        <ul>
          <li>How to get a brand new Python project started and going;</li>
          <li>The right way to code in a Pythonic Way;</li>
          <li>In-depth concepts such as  Classes, Functions, etc;</li>
          <li>Exercises and Project ideas;</li>
          <li>And Much More!</li>
        </ul>
      </main>
    </DefaultLayout>
  );
}
