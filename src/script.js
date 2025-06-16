// Roadmap data
const roadmapData = [
  {
    id: 1,
    title: "Registration Opens",
    status: "current",
    date: "Jan 15",
    description: "Sign up and form your team",
    xp: 100,
  },
  {
    id: 2,
    title: "Ideation Phase",
    status: "locked",
    date: "Feb 1-7",
    description: "Brainstorm and validate ideas",
    xp: 250,
  },
  {
    id: 3,
    title: "Development Sprint",
    status: "locked",
    date: "Feb 8-22",
    description: "Build your MVP",
    xp: 500,
  },
  {
    id: 4,
    title: "Testing & Polish",
    status: "locked",
    date: "Feb 23-28",
    description: "Debug and refine",
    xp: 300,
  },
  {
    id: 5,
    title: "Final Submission",
    status: "locked",
    date: "Mar 1",
    description: "Submit your project",
    xp: 200,
  },
  {
    id: 6,
    title: "Demo Day",
    status: "locked",
    date: "Mar 5",
    description: "Present to judges",
    xp: 1000,
  },
]

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeTruckPosition()
  initializeStageMarkers()
  initializeConceptSwitcher()
  renderAllConcepts()
  updateProgressBar()
})

// Initialize truck position based on progress
function initializeTruckPosition() {
  const completedCount = roadmapData.filter((stage) => stage.status === "completed").length
  const totalStages = roadmapData.length
  const progressPercentage = ((completedCount + 0.5) / totalStages) * 100
  const clampedPosition = Math.max(0, Math.min(progressPercentage - 5, 90))

  const truckContainer = document.getElementById("truckContainer")
  truckContainer.style.left = `${clampedPosition}%`
}

// Initialize stage markers on the truck track
function initializeStageMarkers() {
  const stageMarkers = document.getElementById("stageMarkers")

  roadmapData.forEach((stage, index) => {
    const marker = document.createElement("div")
    marker.className = `stage-marker ${stage.status}`
    marker.style.left = `${(index / (roadmapData.length - 1)) * 100}%`
    stageMarkers.appendChild(marker)
  })
}

// Initialize concept switcher functionality
function initializeConceptSwitcher() {
  const buttons = document.querySelectorAll(".pixel-button[data-concept]")

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const concept = this.dataset.concept
      switchConcept(concept)

      // Update active button
      buttons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
    })
  })
}

// Switch between different UI concepts
function switchConcept(conceptId) {
  const contents = document.querySelectorAll(".concept-content")
  contents.forEach((content) => content.classList.remove("active"))

  const targetContent = document.getElementById(conceptId)
  if (targetContent) {
    targetContent.classList.add("active")
  }
}

// Render all concept contents
function renderAllConcepts() {
  renderWorldMap()
  renderLevelSelect()
  renderQuestLog()
  renderSkillTree()
}

// Render World Map concept
function renderWorldMap() {
  const grid = document.getElementById("worldMapGrid")
  grid.innerHTML = ""

  roadmapData.forEach((stage) => {
    const card = document.createElement("div")
    card.className = `world-map-card ${stage.status}`

    const statusIcon = getStatusIcon(stage.status)

    card.innerHTML = `
            <div class="card-header">
                <span style="font-size: 1rem;">${statusIcon}</span>
                <h3 class="card-title">${stage.title}</h3>
            </div>
            <p class="card-description">${stage.description}</p>
            <div class="card-footer">
                <div class="card-date">${stage.date}</div>
                <div class="card-xp">
                    <span style="color: #facc15;">⭐</span>
                    <span>${stage.xp} XP</span>
                </div>
            </div>
        `

    grid.appendChild(card)
  })
}

// Render Level Select concept
function renderLevelSelect() {
  const grid = document.getElementById("levelSelectGrid")
  grid.innerHTML = ""

  roadmapData.forEach((stage) => {
    const card = document.createElement("div")
    card.className = `level-card ${stage.status}`

    const levelIcon = getLevelIcon(stage.status)

    card.innerHTML = `
            <div class="level-icon">${levelIcon}</div>
            <h3 class="level-number">LEVEL ${stage.id}</h3>
            <p class="level-title">${stage.title}</p>
            <div class="level-xp">${stage.xp} XP</div>
        `

    grid.appendChild(card)
  })
}

// Render Quest Log concept
function renderQuestLog() {
  const content = document.getElementById("questLogContent")
  content.innerHTML = ""

  roadmapData.forEach((stage) => {
    const item = document.createElement("div")
    item.className = `quest-item ${stage.status}`

    const statusSymbol = getQuestStatusSymbol(stage.status)

    item.innerHTML = `
            <div class="quest-status ${stage.status}">${statusSymbol}</div>
            <div class="quest-content">
                <h3 class="quest-title">Quest ${stage.id}: ${stage.title}</h3>
                <p class="quest-description">${stage.description}</p>
                <div class="quest-footer">
                    <span class="quest-date">${stage.date}</span>
                    <div class="quest-reward">
                        <span style="color: #7c3aed;">💎</span>
                        <span>${stage.xp}</span>
                    </div>
                </div>
            </div>
        `

    content.appendChild(item)
  })
}

// Render Skill Tree concept
function renderSkillTree() {
  const stages = document.getElementById("skillTreeStages")
  const lines = document.getElementById("connectionLines")

  stages.innerHTML = ""
  lines.innerHTML = ""

  // Create connection lines
  for (let i = 0; i < roadmapData.length - 1; i++) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line")
    line.setAttribute("x1", "50%")
    line.setAttribute("y1", `${((i + 1) / roadmapData.length) * 100}%`)
    line.setAttribute("x2", "50%")
    line.setAttribute("y2", `${((i + 2) / roadmapData.length) * 100}%`)
    line.setAttribute("stroke", "#8b5cf6")
    line.setAttribute("stroke-width", "3")
    line.setAttribute("stroke-dasharray", "8,4")
    lines.appendChild(line)
  }

  // Create skill stages
  roadmapData.forEach((stage, index) => {
    const stageDiv = document.createElement("div")
    stageDiv.className = `skill-stage ${index % 2 === 1 ? "reverse" : ""}`

    const nodeIcon = getSkillNodeIcon(stage.status)

    stageDiv.innerHTML = `
            <div class="skill-info ${index % 2 === 0 ? "right" : "left"}">
                <div class="skill-card ${stage.status}">
                    <h3 class="skill-title">${stage.title}</h3>
                    <p class="skill-description">${stage.description}</p>
                    <div class="skill-date">${stage.date}</div>
                </div>
            </div>
            <div class="skill-node ${stage.status}">${nodeIcon}</div>
            <div class="skill-info"></div>
        `

    stages.appendChild(stageDiv)
  })
}

// Update progress bar
function updateProgressBar() {
  const completedCount = roadmapData.filter((stage) => stage.status === "completed").length
  const totalStages = roadmapData.length
  const progressPercentage = (completedCount / totalStages) * 100

  const progressFill = document.getElementById("progressFill")
  const progressCount = document.getElementById("progressCount")

  progressFill.style.width = `${progressPercentage}%`
  progressCount.textContent = `${completedCount}/${totalStages} COMPLETE`
}

// Helper functions for icons and symbols
function getStatusIcon(status) {
  switch (status) {
    case "completed":
      return "🏆"
    case "current":
      return "⚡"
    case "locked":
      return "🛡️"
    default:
      return "❓"
  }
}

function getLevelIcon(status) {
  switch (status) {
    case "completed":
      return "⭐"
    case "current":
      return "🔥"
    case "locked":
      return "🔒"
    default:
      return "❓"
  }
}

function getQuestStatusSymbol(status) {
  switch (status) {
    case "completed":
      return "✓"
    case "current":
      return ""
    case "locked":
      return "🔒"
    default:
      return "?"
  }
}

function getSkillNodeIcon(status) {
  switch (status) {
    case "completed":
      return "👑"
    case "current":
      return "⚡"
    case "locked":
      return "🔒"
    default:
      return "❓"
  }
}

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to level cards
  const levelCards = document.querySelectorAll(".level-card")
  levelCards.forEach((card) => {
    if (!card.classList.contains("locked")) {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)"
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)"
      })
    }
  })
})
