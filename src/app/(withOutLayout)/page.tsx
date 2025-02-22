"use client"
import React from "react";
import About from "../../components/shared/About";
import SkillsSection from "../../components/shared/SkillSection";
import ExperienceSection from "../../components/shared/ExprienceSection";
import EducationSection from "../../components/shared/EducationSection";
import BlogSection from "../../components/shared/BlogSection";
import ProjectSection from "../../components/shared/ProjectSection";
import ContactSection from "../../components/shared/ContacUsSection";


export default function Home() {
  return (
    <>
    <About/>
    <SkillsSection/>
    <ExperienceSection/>
    <ProjectSection/>
    <EducationSection/>
    <BlogSection/>
    <ContactSection/>
    </>
  );
}
