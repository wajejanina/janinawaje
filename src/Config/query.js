const pageSettings = `
    pageSettings (first:1) {
        pageHeaderTitle
        pageBackground {
            url
        }
    }
`;
const experiences = `
    experiences {
        experiencePeriod
        jobTitle
        jobDescription
        company
        order
    }
`;
const projectCollections = `
    projectsCollections {
        projectType {
            projectTypeName
            thumbnail {
            url
            }
        }
        projects {
            projectTitle
            projectDescription
            projectLink
            projectAsset {
            url
            }
        }
    }
`;
const skillsCollections = `
    skillsCollections {
        skillType {
            skillTypeName
        }
        skills {
            skillName
            skillRate
            skillIcon {
            url
            }
            skillRelevance
        }
    }
`;
const contactForm = `
    contactForms (first: 1) {
        contactTitle
        contactDescription
        recipientEmail
        socials {
            socialLink
        }
    }
`

export {
    pageSettings,
    experiences,
    projectCollections,
    skillsCollections,
    contactForm
}