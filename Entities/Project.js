import data from './Project.json' assert { type: 'json' };

const projects = data.projects;

export const Project = {
  async list() {
    return projects;
  },
  async filter(criteria) {
    let result = projects;
    if (criteria && criteria.featured !== undefined) {
      result = result.filter(p => p.featured === criteria.featured);
    }
    return result;
  }
};
