

export function slugify (string: string) {
    const slug = string 
        .toLowerCase()
        .normalize("NFD")  
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")  
        .trim()
        .replace(/\s/g,"-")

    return slug
}