---
title: Taskforce Wildlife by United for Wildlife
description: Supporting transport businesses in becoming more resilient to the exploitation by illegal wildlife traffickers
keywords: ['United for Wildlife', 'edenspiekermann']
image: ./taskforce-wildlife-hero.png
---

<ProjectHeading title='Taskforce Wildlife by United for Wildlife' abstract='Supporting companies in the transport sector in becoming more resilient to the exploitation of illegal wildlife traffickers' borderBottom huge />

<ProjectSection>
  <ProjectInfo title='Timeline' abstract='Launched Fall 2018' />
  <ProjectInfo title='Company' abstract='Edenspiekermann' />
  <ProjectInfo title='Role' abstract='I designed and iterated on core experiences within the application. I reported directly to the technical director of the product.' />
  <ProjectInfo title='About' abstract='Taskforce Wildlife is a tool that enables companies in the transport sector to assess their logistical decisions and confidently plan safe routes.' />
</ProjectSection>

![The desktop interfact of Taskforce Wildlife.](./taskforce-wildlife-hero.png)

## Context

Organized criminal networks across the globe have caused an unprecedented increase in the illegal hunting and trading of animals. Traffickers exploit unsuspecting transport businesses, such as passenger and cargo airlines and shipping companies, by using them to smuggle their contraband. 

![The current state of wildlife trafficking](./taskforce-wildlife-problem.png)

In response to the increase of illegal wildlife activities, United for Wildlife (UfW) approached my team at Edenspiekermann and asked us to explore approaches to slow the rate of wildlife trafficking. 

![United for Wildlife, an initiative led by the Duke of Cambridge to stop wildlife, approached our team us for possible solutions to lower the rate of wildlife trafficking.](./taskforce-wildlife-UFW.png)

## Understanding wildlife trafficking 

Due to the complexity of the problem, we looked for ways to pare it down to bite-sized pieces to tighten the scope. We conducted user interviews with the actors involved. In the interview with the logistics team from Bangkok Airways, we learned transport businesses often unwittingly become conduits to illegal wildlife trading. To combat this, the logistics team aims to help transport vehicles avoid compromised areas. Before a logistician plans a transport route, they attempt to track and analyse historic trafficking reports on the map.

![The current journey map of transport businesses](./taskforce-wildlife-transport-businesses-journey.png)

To understand the workflow of wildlife rangers appointed by UfW, we learned that rangers would make reports when they detect any suspicious activity. But these reports would often get buried in a dense backlog, rarely reaching transport businesses in time if at all. 

![The current journey map of United for Wildlife and their wildlife rangers.](./taskforce-wildlife-UFW-journey.png)

I extracted key insights from logisticians and rangers that helped the team reframe the problem space.

![Some key insights I gleaned from our interview with the logisitcs from Bangkok Airways](./taskforce-wildlife-logistician-pain-points.png)

![Some key insights about rangers I gleaned from our interview with the UfW](./taskforce-wildlife-ranger-pain-points.png)

## Problem
- **Long-term goal**: To slow the rate of wildlife trafficking
- **Short-term goal**: To help transport businesses **outmaneuver wildlife traffickers**
- **Opportunity**: How can we help businesses **leverage the intel of rangers to avoid traffickers** en route? 

## Taskforce Wildlife

The final solution, Taskforce Wildlife, allowed logisticians to propose a route and would then output a bespoke risk report based on recent and historic reports made by rangers. The risk report creates a direct communication channel from rangers to logisticians. I created a user journey that helped the team and client understand how the observations of rangers in the field would directly be equipping logisticians with the information they need to plan safe routes.

![The user journey map of Taskforce Wildlife](taskforce-wildlife-ideal-journey.png)

## A design system to support our product

Unlike many products on the market today, we knew a wildlife product needed to work with specific real-world constraints. For this reason, we established two major guidelines.

![Taskforce Wildlife was designed to allow logisticians to propose a route and would then output a bespoke risk report based reports made by rangers.](taskforce-wildlife-risk-calculator.png)

### Guideline #1: Prompt action without fear-mongering

The tool needed to present critical information and a ton of it. However, we knew that jampacking the tool with terrifying warnings and complicated jargon would only overwhelm transport businesses. The design needed to strike a balance between approachable and actionable without downplaying the severity or urgency of the issue.

### Guideline #2: Provide accessibility

Rangers needed to be able to access Taskforce Wildlife while patrolling rural areas with limited technological access and send reports in real time. It needed to be lightweight, yet reliable. The design system needed to lean enough that loading time would not be compromised. I worked closely with the technical director to develop a library of responsive components fluid across all screen sizes and browser versions. We also opted for typography and high contrast visual treatments that would be communicative in smaller and older devices.

### Impact

Taskforce Wildlife has since been released and used by rangers and logisticians regularly. United for Wildlife was very satisfied with how we approached the problem. This project was featured in a presentation led by the Duke of Cambridge at the 2018 Illegal Wildlife Trade Conference.
