const aiTools = [
    {
        name: "ChatGPT",
        description: "General-purpose AI chatbot for writing, analysis, and more",
        category: "writing",
        tags: ["Free", "Premium"],
        url: "https://chat.openai.com"
    },
    {
        name: "GitHub Copilot",
        description: "AI programming assistant for code completion and generation",
        category: "programming",
        tags: ["Paid", "Student discount"],
        url: "https://github.com/features/copilot"
    },
    {
        name: "Wolfram Alpha",
        description: "Computational intelligence for math and science",
        category: "math",
        tags: ["Free", "Premium"],
        url: "https://www.wolframalpha.com"
    },
    {
        name: "Elicit",
        description: "AI research assistant for finding and analyzing papers",
        category: "research",
        tags: ["Free"],
        url: "https://elicit.org"
    },
    {
        name: "Jasper",
        description: "AI writing assistant for content creation and marketing",
        category: "writing",
        tags: ["Paid", "Free trial"],
        url: "https://www.jasper.ai"
    },
    {
        name: "Notion AI",
        description: "AI-powered productivity tool for note-taking and task management",
        category: "productivity",
        tags: ["Free", "Premium"],
        url: "https://www.notion.so/product/ai"
    },
    {
        name: "DALL·E",
        description: "AI tool for generating images from text prompts",
        category: "art",
        tags: ["Free", "Premium"],
        url: "https://openai.com/dall-e"
    },
    {
        name: "DeepL",
        description: "AI-based translation service with advanced language models",
        category: "language",
        tags: ["Free", "Premium"],
        url: "https://www.deepl.com"
    },
    {
        name: "Lumen5",
        description: "AI tool for turning blog posts into engaging video content",
        category: "video",
        tags: ["Free", "Premium"],
        url: "https://www.lumen5.com"
    },
    {
        name: "Runway",
        description: "AI-powered creative suite for video editing and media production",
        category: "video editing",
        tags: ["Free", "Premium"],
        url: "https://runwayml.com"
    },
    {
        name: "Grammarly",
        description: "AI tool for grammar checking, writing enhancement, and plagiarism detection",
        category: "writing",
        tags: ["Free", "Premium"],
        url: "https://www.grammarly.com"
    },
    {
        name: "Copy.ai",
        description: "AI-driven copywriting assistant for creating ads, emails, and more",
        category: "writing",
        tags: ["Free", "Premium"],
        url: "https://www.copy.ai"
    },
    {
        name: "Scribe AI",
        description: "AI for documenting processes and writing step-by-step guides automatically",
        category: "productivity",
        tags: ["Paid", "Free trial"],
        url: "https://scribehow.com"
    },
    {
        name: "Soundraw",
        description: "AI-powered music creation tool for generating royalty-free tracks",
        category: "music",
        tags: ["Paid", "Free trial"],
        url: "https://soundraw.io"
    },
    {
        name: "Speechify",
        description: "AI-based text-to-speech tool for reading articles, books, and documents aloud",
        category: "audio",
        tags: ["Free", "Premium"],
        url: "https://www.speechify.com"
    },
    {
        name: "Synthesia",
        description: "AI tool for creating videos with virtual avatars from text",
        category: "video",
        tags: ["Paid", "Free trial"],
        url: "https://www.synthesia.io"
    },
    {
        name: "Pictory",
        description: "AI-powered video editor for creating short-form video content from text",
        category: "video",
        tags: ["Free", "Premium"],
        url: "https://pictory.ai"
    },
    {
        name: "Lensa AI",
        description: "AI-powered photo editor that enhances images and creates artistic effects",
        category: "photo editing",
        tags: ["Paid", "Free trial"],
        url: "https://www.lensa.ai"
    },
    {
        name: "RunwayML",
        description: "AI tools for creatives to generate art, edit video, and more",
        category: "creative tools",
        tags: ["Free", "Premium"],
        url: "https://runwayml.com"
    },
    {
        name: "PaddlePaddle",
        description: "Deep learning platform for training and deploying AI models",
        category: "AI development",
        tags: ["Free"],
        url: "https://www.paddlepaddle.org"
    },
    {
        name: "MidJourney",
        description: "AI image generation from text descriptions, similar to DALL·E",
        category: "art",
        tags: ["Paid", "Free trial"],
        url: "https://www.midjourney.com"
    },
    {
        name: "AI Dungeon",
        description: "AI-based interactive storytelling platform",
        category: "entertainment",
        tags: ["Free", "Premium"],
        url: "https://play.aidungeon.io"
    },
    {
        name: "Replika",
        description: "AI chatbot designed to engage in deep, empathetic conversations",
        category: "chatbots",
        tags: ["Free", "Premium"],
        url: "https://replika.ai"
    },
    {
        name: "Frase",
        description: "AI-powered content research and writing assistant",
        category: "writing",
        tags: ["Free", "Premium"],
        url: "https://www.frase.io"
    },
    {
        name: "Descript",
        description: "AI-powered audio/video editing platform with transcription capabilities",
        category: "audio/video editing",
        tags: ["Paid", "Free trial"],
        url: "https://www.descript.com"
    },
    {
        name: "Zapier AI",
        description: "AI automation tool for integrating apps and workflows",
        category: "productivity",
        tags: ["Paid", "Free trial"],
        url: "https://zapier.com"
    },
    {
        name: "CopySmith",
        description: "AI-powered writing tool for generating content at scale",
        category: "writing",
        tags: ["Free", "Premium"],
        url: "https://copysmith.ai"
    },
    {
        name: "AI Music",
        description: "AI-generated music tool to create royalty-free soundtracks",
        category: "music",
        tags: ["Paid", "Free trial"],
        url: "https://aimusic.ai"
    },
    {
        name: "Peltarion",
        description: "AI platform that allows building, training, and deploying models",
        category: "AI development",
        tags: ["Paid", "Free trial"],
        url: "https://www.peltarion.com"
    },
    {
        name: "Albert AI",
        description: "AI marketing platform for automating and optimizing campaigns",
        category: "marketing",
        tags: ["Paid", "Free trial"],
        url: "https://www.albert.ai"
    },
    {
        name: "AI Writer",
        description: "AI writing assistant for long-form content creation and blogging",
        category: "writing",
        tags: ["Free", "Premium"],
        url: "https://ai-writer.com"
    }
];


// DOM elements
const searchInput = document.getElementById('searchInput');
const aiToolsContainer = document.getElementById('aiTools');
const categoryButtons = document.querySelectorAll('.category-btn');

// Current filter state
let currentCategory = 'all';

// Function to render AI tools
function renderTools(tools) {
    aiToolsContainer.innerHTML = tools.map(tool => `
        <div class="tool-card" onclick="window.open('${tool.url}', '_blank')">
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tags">
                ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="${tool.url}" target="_blank">Learn More →</a>
        </div>
    `).join('');
}

// Filter tools based on search and category
function filterTools() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = aiTools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm) || 
                            tool.description.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    renderTools(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterTools);

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update category and filter
        currentCategory = button.dataset.category;
        filterTools();
    });
});

// Initial render
renderTools(aiTools); 