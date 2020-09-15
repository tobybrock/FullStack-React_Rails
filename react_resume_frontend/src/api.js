let header = {};


//resumes
export async function getResumes() {
    const res = await fetch('http://localhost:3000/api/resumes/', {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }

    return await res.json();
}

export async function postResume(data) {
    const res = await fetch(`http://localhost:3000/api/resumes/`, {
        method: 'POST',
             headers: header,
       
        body: JSON.stringify({"resume":data})
    });
    console.log('res', res);

    if(res.status > 299) {
        return Promise.reject('Unable to create resume');
    }

    return await res.json();
}

//resume projects
export async function getProjects(resume_id) {
    const res = await fetch(`http://localhost:3000/api/resumes/${resume_id}/projects`, {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }

    return await res.json();
}

export async function postProject(data, resume_id) {
    const res = await fetch(`http://localhost:3000/api/resumes/${resume_id}/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"project":data})
    });
    console.log('res', res);

    if(res.status > 299) {
        return Promise.reject('Unable to post Projects');
    }

    return await res.json();
}

//resume education
export async function getEducations(resume_id) {
    const res = await fetch(`http://localhost:3000/api/resumes/${resume_id}/educations`, {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }

    return await res.json();
}

export async function postEducation(data, resume_id) {
    const res = await fetch(`http://localhost:3000/api/resumes/${resume_id}/educations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"education":data})
    });
    console.log('res', res);

    if(res.status > 299) {
        return Promise.reject('Unable to post Education');
    }

    return await res.json();
}

//resume experiences
export async function getExperiences(resume_id) {
    const res = await fetch(`http://localhost:3000/api/resumes/${resume_id}experiences`, {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }
    return await res.json();
}

export async function postExperience(data, resume_id) {
    const res = await fetch(`http://localhost:3000/api/resumes/${resume_id}/experiences`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"experience":data})
    });
    console.log('res', res);

    if(res.status > 299) {
        return Promise.reject('Unable to post Experience');
    }

    return await res.json();
}

//user api calls
export async function register(data) {
    const res = await fetch(`http://localhost:3000/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"user":data})
    });
    console.log('res', res);

    if(res.status > 299) {
        return Promise.reject('Unable to create user');
    }

    return await res.json();
}

export function setToken(token) {
    header = {     
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
}

export async function login(data) {
    const res = await fetch(`http://localhost:3000/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"user":data})
    });

    console.log('res', res);

    if(res.status > 299) {
        return Promise.reject('incorrect login');
    }

    return await res.json();
}