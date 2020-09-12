let header = {};


//resumes
export async function getResumes() {
    const res = await fetch('/api/resumes', {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }

    return await res.json();
}

//resume projects
export async function getProjects(resume_id) {
    const res = await fetch(`/api/resumes/${resume_id}/projects`, {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }

    return await res.json();
}

//resume education
export async function getEducations(resume_id) {
    const res = await fetch(`/api/resumes/${resume_id}educations`, {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
    }

    return await res.json();
}

//resume experiences
export async function getExperiences(resume_id) {
    const res = await fetch(`/api/resumes/${resume_id}experiences`, {
        headers: header
    });

    if(res.status > 299) {
        return Promise.reject('not authorised');
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