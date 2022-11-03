import { ref } from 'vue'

export function getData() {
  const error = ref(null)
  const projects = ref([])
  const project = ref(null)
  const pretty_json = ref(null)

  const load = async () => {
    try { 
      let data = await fetch('http://localhost:3000/projects')
      if(!data.ok) {
        throw Error("no data available")
      }

      const collection = await data.json()
      const random_item = collection[Math.floor(Math.random() * collection.length - 1)]
      
      projects.value = collection
      project.value = random_item
      pretty_json.value = "export default "+JSON.stringify(random_item, undefined, 2)
    } 
    catch (err) {
      error.value = err.message
    }
  }

  load()

  return { 
    pretty_json,
    projects,
    project,
    error, 
    load
  }
}