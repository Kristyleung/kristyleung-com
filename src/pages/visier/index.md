---
title: Workforce Planning by Visier
description: Creating a collaborative experience for workforce planners.
keywords: ['visier', 'workforce planning']
image: ./visier-hero.png
---

<ProjectHeading title='Workforce Planning by Visier' abstract='Facilitating collaboration for businesses to analyse their workforce' borderBottom huge />

<ProjectSection>
  <ProjectInfo title='Timeline' abstract='Launched Fall 2016' />
  <ProjectInfo title='Role' abstract='I designed and iterated on numerous features in the application while reporting directly to the design lead of the product. ' />
  <ProjectInfo title='Role' abstract='As a UX designer, I worked with developers, my product manager, and design lead to create a new feature that helps multiple users to edit the same plan. ' />
</ProjectSection>

![The user interface of Visier's Workforce Planning platform](./visier-hero.jpg)

## Context

Workforce Planning (WFP) is an application that allows users to plan and analyze their workforce supply and demand based on business needs and constraints. Generally, workforce planning is a collaborative effort between Finance and HR teams. To create the most effective workforce plans, organizations need a tool that can facilitate teamwork. However, WFP could not allow multiple users to edit simultaneously. 

## Problem

Unlike other spreadsheet tools on the market, a single edit generates changes to values across the grid that takes time to load. As a result, the feature was subject to these constraints:

1. Only one user can edit at a time.
2. The user must manually refresh the plan in order for the sharing status to take effect.

### Goals
**Long-term goal**: To facilitate multiple users to edit the same workforce plan

**Short-term goal**: 
- To help users identify who is editing a plan
- To help users transfer editing control
- To help users share permissions to a plan

After identifying these goals, I was able to find a jumping off point and create a mind map and another iteration of the interface sketch.

![Mapping out user decisions and software behavior helps to break down complexity](./visier-mindmap.png)

## Solution

### Designing the system

We needed a way to present the functionality to share, edit and identify the editor in a plan. I created two controls in the toolbar that would help users take sharing and editing actions as well as convey useful information about sharing and editing statues.

![These controls help users take sharing and editing actions while conveying useful information about sharing and editing statues.](./visier-controls-breakdown.png)

The controls a user can access is contingent on their permissions to the plan. To break down these complexities I created the following framework for all 4 possible cases. 

![Based on their permissions and the status of the plan, a user might see their toolbar in 4 different ways.](./visier-sketch-states.png)

### Final design 
Here’s how my design works:

![My design helped multiple users edit a plan within our technical constraints by establishing a clear transfer of editing control to users.](./visier-how-it-works.png)

## Impact
After collaborating with the development team to ensure a successful handoff, the new feature was implemented into the build. During the month of release, the new functionality drove the user bases of each enterprise customer to increase by an average of 25%. Additionally, we received very favorable feedback from our reference customers. Given this success, my design lead and I advocated for this editing permission system to be used across our other services.

## The retrospective

Through the process of completing UX concepts and specifications for new features, I have learned the importance of finding the most feasible UX that supports the necessary functionality. To achieve this, I learned to be meticulous by questioning each moment in user interaction. Can I simply this method by using fewer affordances? How can I make this new functionality more accessible? Can I reuse an existing piece of UI or do I have to make a new one? If I propose a new interface, is it worthwhile for the developers to program? Can it reused? During the start of the work term, I often failed to ask these questions. As a result, I had to make many more iterations of the mockups to achieve the completeness I would have had if I considered the previous questions.

## Other Projects

### Data Management Tool

I worked with a Data Engineer intern to design and help implement (using HTML and LESS) an overhaul for an internal tool that helped reconfigure, validate and load incoming data into the Visier database. My contribution laid down the groundwork for the tool to continuously grow and assist Data Engineers in other aspects of their work.

### WFP Reintegration

Visier is currently in the process of integrating WFP into a new platform with other tools. By doing so, WFP will be more effective in sharing their plans, forecasts and budgets to the platform's business users. During the later months of my work term, I worked alongside my design lead to develop a comprehensive set of mockups which detailed end to end user work flows of the application.
