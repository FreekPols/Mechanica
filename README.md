# Mechanics & Special Relativity - Interactive Textbook


[![Creative Commons 4.0 Attribution-NonCommercial](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cc_by-nc_icon.svg/1920px-Cc_by-nc_icon.svg.png)](https://creativecommons.org/licenses/by-nc/4.0/) (Unless stated otherwise)

An interactive, open-access Mechanics & Special Relativity textbook designed for physics students at the bachelor level. 

## 📖 Read the Book

The complete interactive textbook will be available at [https://interactivetextbooks.tudelft.nl/mecharela](https://interactivetextbooks.tudelft.nl/mecharela) once it is published through our university's library.
but is currently available [here](https://freekpols.github.io/Mechanica/)


## 🎯 About This Textbook

This textbook is suited for university level physics students with a basic prior knowledge on physics, often taught in secondary education.

### Key Features

- **Interactive Learning**: Embedded python applets and simulations provide hands-on experience with physics concepts
- **Modern Design**: Built using Jupyter Book 2.0 for an engaging digital experience
- **Open Access**: Freely available under Creative Commons Attribution 4.0 license (unless stated otherwise)

### Topics Covered

The book covers the following chapters:

**Mechanics**
1. **Newton's laws** 
2. **Work & Energy** 
3. **Angular Momentum, Torque & Central Forces** 
4. **Conservation Laws & Galilean Transformations** 
5. **Oscillations** 
6. **Collisions**
   
**Special Relativity**  
7. **Lorentz Transformation**  
8. **Velocity Transformation**  
9. **Spacetime and 4vectors**  
10. **4-Momentum**  
11. **Relativistic dynamics and collisions**

**Appendix**
index
math
  - calculus
  - linear algebra
  - differential equations

## 🛠️ Building the Book

This repository contains the source files for building the interactive textbook using Jupyter Book 2.0. 

We created a pixi.toml file with all dependencies. If you haven't got pixi yet, install [pixi](https://pixi.prefix.dev/latest/installation/). Download this [book](https://gitlab.tudelft.nl/opentextbooks/TN_MechaRela/-/archive/main/TN_MechaRela-main.zip?ref_type=heads) and unzip it in dedicated folder e.g. `mecharela`. Using the terminal to this folder (right click on the folder and choose Open in Terminal). Run `pixi install`, this will install all dependencies.

Once everything is installed simply type `pixi run editor` and hit enter. This will work because in the `.toml` file we created a task called `editor` which runs jupyter lab. Hence, running `pixi run editor` is equivalent to `pixi run editor`. 

If you want a live preview of the book, run `pixi run preview`. If you want to build the pdf, run `pixi run pdf`.


### Prerequisites

- Python 3.7+
- Jupyter Book 2.0 or [MystMD](https://mystmd.org/guide)

## 📁 Repository Structure

```
├──┐ myst.yml             # Jupyter Book configuration & Table of contents
   ├── index.md          # landing page
   ├──┐ content/
      ├── credits.md     # Book introduction
      ├──┐ classic/       
         ├── ...         # Chapters on classical mechanics
      ├──┐ special        
         ├── ...         # Chapters on special relativity

      ├──┐ images/
         ├── ...         # images
         ├── raw/        # svg and python 

      ├──┐ pysim/        
         ├── ...         # python simulations
```

## 👥 Authors and Contributors

This book was created by a team of lecturers from the **Delft Institute of Applied Mathematics** at **TU Delft University of Technology**.

### Principal Authors

- [prof. dr. R.F. (Rob) Mudde](https://www.linkedin.com/in/robert-mudde-15307a13)
- [prof. dr. B. (Bernd) Rieger](https://www.tudelft.nl/staff/b.rieger/)
- [dr. ir. C.F.J. (Freek) Pols](https://www.tudelft.nl/tnw/over-faculteit/afdelingen/science-engineering-education-seed/medewerkers/staff-science-education/freek-pols)

### Contributors

- [Hanna den Hertog](https://www.linkedin.com/in/hanna-den-hertog/)
- [Luuk Froling](https://www.linkedin.com/in/luuk-froling/)
- [Dion Hoeksma](https://www.linkedin.com/in/dion-hoeksema-96205318a/)
- [Winston de Greef](https://winstondegreef.com/)
- [Boas Bakker](https://boas.work/)

## 🤝 Contributing

We welcome contributions to improve this textbook! Please feel free to:

- Report issues or suggest improvements
- Provide feedback on the interactive elements

## 📄 Licenses

This book is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/), unless stated otherwise.

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any non-commercial purpose provided proper attribution is given.

All python simulations and scripts are licensed under [CC0](https://creativecommons.org/public-domain/cc0/), meaning these can be used without limitations and attribution.

## 📧 Contact

For questions about this textbook, please contact Freek Pols.

---

**TU Delft** | **Faculty of Applied Sciences** 

