document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.getElementById('recipes-container');
    const recipeDetail = document.getElementById('recipe-detail');
    const recipeContent = document.getElementById('recipe-content');
    const backToRecipes = document.getElementById('back-to-recipes');
    const noResults = document.getElementById('no-results');
    const regionFilter = document.getElementById('region-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const ingredientFilter = document.getElementById('ingredient-filter');
    const clearFilters = document.getElementById('clear-filters');
    const favoritesContainer = document.getElementById('favorites-container');
    const noFavorites = document.getElementById('no-favorites');


    const recipes = [
        {
            id: 'empanadas',
            title: 'Beef Empanadas',
            image: 'images/recipes/empanadas.jpg',
            description: 'Baked pastries filled with ground beef, onions, olives, hard-boiled eggs, and raisins.',
            region: 'centro',
            difficulty: 'media',
            mainIngredient: 'carne',
            preparationTime: '90 minutes',
            servings: 12,
            ingredients: [
                '1 kg of flour',
                '250 g of lard',
                '500 g of ground beef',
                '3 large onions',
                '2 tablespoons of sweet paprika',
                '1 tablespoon of cumin',
                'Black olives',
                'Hard-boiled eggs',
                'Raisins'
            ],
            instructions: [
                'Prepare the dough by mixing flour with melted lard, warm water, and salt.',
                'For the filling, sauté the chopped onion until translucent.',
                'Add the ground beef and cook until browned.',
                'Season with paprika, cumin, salt, and pepper.',
                'Roll out the dough and cut circles of approximately 15 cm.',
                'Place a spoonful of filling on each circle of dough.',
                'Add an olive, a piece of hard-boiled egg, and some raisins.',
                'Close the empanada by folding the dough and sealing the edges.',
                'Bake at 180°C for 25-30 minutes until golden brown.'
            ]
        },
        {
            id: 'pastel-choclo',
            title: 'Corn Pie',
            image: 'images/recipes/pasteldecholo.webp',
            description: 'Sweet corn casserole with beef, chicken, olives, and hard-boiled eggs.',
            region: 'centro',
            difficulty: 'dificil',
            mainIngredient: 'maiz',
            preparationTime: '120 minutes',
            servings: 8,
            ingredients: [
                '8 corn cobs',
                '500 g of ground beef',
                '4 pieces of chicken',
                '2 large onions',
                '2 cloves of garlic',
                'Black olives',
                'Hard-boiled eggs',
                'Raisins',
                'Fresh basil',
                'Sugar'
            ],
            instructions: [
                'Prepare the meat filling as for empanadas, sautéing onion and adding the beef.',
                'Cook the chicken and shred it.',
                'Remove corn kernels from the cobs and grind or process them.',
                'Cook the corn paste with a little milk, butter, and basil.',
                'In a clay dish, place the meat filling, chicken, olives, hard-boiled eggs, and raisins.',
                'Cover with the corn paste and sprinkle with sugar.',
                'Bake at 180°C until the surface is golden brown.'
            ]
        },
        {
            id: 'completo',
            title: 'Italian Hot Dog',
            image: 'images/recipes/completo.jpg',
            description: 'Chilean hot dog with avocado, tomato, and mayonnaise, representing the colors of the Italian flag.',
            region: 'centro',
            difficulty: 'facil',
            mainIngredient: 'carne',
            preparationTime: '15 minutes',
            servings: 4,
            ingredients: [
                '4 hot dog buns',
                '4 hot dogs',
                '2 ripe avocados',
                '2 tomatoes',
                'Mayonnaise'
            ],
            instructions: [
                'Cook the hot dogs in hot water for 5 minutes.',
                'Cut the tomatoes into small cubes.',
                'Prepare the avocado by mashing it with a fork, add salt and lemon juice to taste.',
                'Warm the buns slightly.',
                'Place the hot dog in the bun.',
                'Cover with avocado, tomato, and finish with mayonnaise.'
            ]
        },
        {
            id: 'curanto',
            title: 'Curanto',
            image: 'images/recipes/curanto.jpg',
            description: 'Traditional dish from Chiloé with seafood, meats, and potatoes cooked in a hole in the ground with hot stones.',
            region: 'sur',
            difficulty: 'dificil',
            mainIngredient: 'mariscos',
            preparationTime: '180 minutes',
            servings: 10,
            ingredients: [
                'Clams',
                'Mussels',
                'Chilean mussels',
                'Pork',
                'Chicken',
                'Sausages',
                'Potatoes',
                'Chapaleles (potato dough)',
                'Milcaos (potato dough with pork cracklings)',
                'Nalca leaves (Chilean rhubarb)'
            ],
            instructions: [
                'Dig a hole in the ground and place large stones.',
                'Light a fire over the stones until they are very hot.',
                'Remove the embers and place nalca leaves over the stones.',
                'Arrange in layers the seafood, meats, potatoes, chapaleles, and milcaos.',
                'Cover with more nalca leaves and soil or wet sacks.',
                'Steam for approximately 1.5 hours.'
            ]
        },
        {
            id: 'ceviche',
            title: 'Northern Ceviche',
            image: 'images/recipes/ceviche.jpg',
            description: 'Fresh fish marinated in lime juice with onions, cilantro, and chili peppers, typical of northern Chile.',
            region: 'norte',
            difficulty: 'facil',
            mainIngredient: 'mariscos',
            preparationTime: '30 minutes + 2 hours marinating',
            servings: 4,
            ingredients: [
                '500 g of fresh sea bass or corvina',
                '6 limes',
                '1 red onion',
                'Fresh cilantro',
                'Green chili pepper (optional)',
                'Salt and pepper'
            ],
            instructions: [
                'Cut the fish into small cubes.',
                'Squeeze the limes over the fish and mix well.',
                'Cut the onion into thin julienne strips and the chili into slices.',
                'Mix the fish with the onion, chili, and chopped cilantro.',
                'Season with salt and pepper.',
                'Refrigerate for at least 2 hours before serving.'
            ]
        },
        {
            id: 'cazuela',
            title: 'Cazuela',
            image: 'images/recipes/casuela.jpg',
            description: 'Traditional Chilean soup made with meat, potatoes, corn, pumpkin, and various vegetables.',
            region: 'centro',
            difficulty: 'media',
            mainIngredient: 'carne',
            preparationTime: '60 minutes',
            servings: 6,
            ingredients: [
                '500g beef or chicken pieces',
                '2 potatoes, peeled and quartered',
                '2 corn cobs, cut into rounds',
                '1 piece of pumpkin, peeled and cubed',
                '1 carrot, sliced',
                '1 onion, chopped',
                '2 cloves of garlic, minced',
                '1 cup of green beans',
                'Fresh cilantro',
                'Salt and pepper to taste'
            ],
            instructions: [
                'In a large pot, cook the meat with the onion and garlic until browned.',
                'Add 2 liters of water or broth and bring to a boil.',
                'Add the potatoes, corn, pumpkin, and carrot.',
                'Simmer for about 30 minutes until the vegetables are tender.',
                'Add the green beans and cook for another 5 minutes.',
                'Season with salt and pepper.',
                'Garnish with fresh cilantro before serving.'
            ]
        },
        {
            id: 'humitas',
            title: 'Humitas',
            image: 'images/recipes/humitas.jpg',
            description: 'Chilean tamales made with fresh corn, basil, and onion, wrapped in corn husks and steamed.',
            region: 'centro',
            difficulty: 'dificil',
            mainIngredient: 'maiz',
            preparationTime: '90 minutes',
            servings: 12,
            ingredients: [
                '12 corn cobs with husks',
                '1 large onion, finely chopped',
                '2 tablespoons of butter',
                '1/4 cup of fresh basil, chopped',
                '1/2 cup of milk',
                'Salt and pepper to taste',
                'String or corn husk strips for tying'
            ],
            instructions: [
                'Remove the husks from the corn carefully to keep them intact for wrapping.',
                'Cut the kernels from the cobs and grind or process them to create a paste.',
                'In a pan, sauté the onion in butter until translucent.',
                'Mix the corn paste with the sautéed onion, basil, milk, salt, and pepper.',
                'Place a portion of the mixture in the center of a corn husk.',
                'Fold the husk to enclose the filling and tie with string or corn husk strips.',
                'Steam the humitas for about 45 minutes until firm.'
            ]
        }
    ];


    function createRecipeCards(recipesToShow) {
        recipesContainer.innerHTML = '';
        
        if (recipesToShow.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        
        noResults.classList.add('hidden');
        
        recipesToShow.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <div class="recipe-info">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <div class="recipe-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${getRegionName(recipe.region)}</span>
                        <span><i class="fas fa-clock"></i> ${recipe.preparationTime.split(' ')[0]}</span>
                        <span><i class="fas fa-signal"></i> ${getDifficultyName(recipe.difficulty)}</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="view-recipe" data-id="${recipe.id}">VIEW</button>
                        <div class="heart-container">
                            <button class="favorite-recipe" data-id="${recipe.id}" aria-label="Add to favorites">
                                <i class="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            recipesContainer.appendChild(card);
            
            // Agregar evento para ver receta
            card.querySelector('.view-recipe').addEventListener('click', () => {
                showRecipeDetail(recipe.id);
            });
            

            card.querySelector('.favorite-recipe').addEventListener('click', (e) => {
                toggleFavorite(recipe.id);
                

                const heartIcon = e.currentTarget.querySelector('i');
                if (isFavorite(recipe.id)) {
                    heartIcon.className = 'fas fa-heart';
                } else {
                    heartIcon.className = 'far fa-heart';
                }
            });
        });
        

        updateFavoriteIcons();
    }


    function showRecipeDetail(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        
        if (!recipe) return;
        

        document.querySelector('.recipes-grid').classList.add('hidden');
        document.querySelector('.recipe-filters').classList.add('hidden');
        recipeDetail.classList.remove('hidden');
        

        recipeContent.innerHTML = `
            <div class="recipe-header">
                <h2>${recipe.title}</h2>
                <div class="recipe-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${getRegionName(recipe.region)}</span>
                    <span><i class="fas fa-clock"></i> ${recipe.preparationTime}</span>
                    <span><i class="fas fa-signal"></i> ${getDifficultyName(recipe.difficulty)}</span>
                    <span><i class="fas fa-users"></i> ${recipe.servings} servings</span>
                </div>
            </div>
            <div class="recipe-main">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <button class="btn-small favorite-detail" data-id="${recipe.id}">
                        <i class="${isFavorite(recipe.id) ? 'fas' : 'far'} fa-heart"></i> 
                        ${isFavorite(recipe.id) ? 'Remove from favorites' : 'Add to favorites'}
                    </button>
                </div>
                <div class="recipe-ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                    ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        

        recipeContent.querySelector('.favorite-detail').addEventListener('click', (e) => {
            toggleFavorite(recipe.id);
            

            const heartIcon = e.currentTarget.querySelector('i');
            if (isFavorite(recipe.id)) {
                heartIcon.className = 'fas fa-heart';
                e.currentTarget.textContent = ' Remove from favorites';
                e.currentTarget.prepend(heartIcon);
            } else {
                heartIcon.className = 'far fa-heart';
                e.currentTarget.textContent = ' Add to favorites';
                e.currentTarget.prepend(heartIcon);
            }
        });
    }


    if (backToRecipes) {
        backToRecipes.addEventListener('click', () => {
            recipeDetail.classList.add('hidden');
            document.querySelector('.recipes-grid').classList.remove('hidden');
            document.querySelector('.recipe-filters').classList.remove('hidden');
        });
    }


    function applyFilters() {
        const regionValue = regionFilter.value;
        const difficultyValue = difficultyFilter.value;
        const ingredientValue = ingredientFilter.value;
        
        let filteredRecipes = [...recipes];
        

        if (regionValue !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.region === regionValue);
        }
        

        if (difficultyValue !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.difficulty === difficultyValue);
        }
        

        if (ingredientValue !== 'all') {
            filteredRecipes = filteredRecipes.filter(recipe => recipe.mainIngredient === ingredientValue);
        }
        
        createRecipeCards(filteredRecipes);
    }


    if (regionFilter && difficultyFilter && ingredientFilter) {
        regionFilter.addEventListener('change', applyFilters);
        difficultyFilter.addEventListener('change', applyFilters);
        ingredientFilter.addEventListener('change', applyFilters);
    }


    if (clearFilters) {
        clearFilters.addEventListener('click', () => {
            regionFilter.value = 'all';
            difficultyFilter.value = 'all';
            ingredientFilter.value = 'all';
            applyFilters();
        });
    }


    function getFavorites() {
        return JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    }

    function isFavorite(recipeId) {
        const favorites = getFavorites();
        return favorites.includes(recipeId);
    }

    function toggleFavorite(recipeId) {
        let favorites = getFavorites();
        
        if (isFavorite(recipeId)) {

            favorites = favorites.filter(id => id !== recipeId);
        } else {

            favorites.push(recipeId);
        }
        
        localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
        updateFavoritesList();
    }

    function updateFavoriteIcons() {
        document.querySelectorAll('.favorite-recipe').forEach(button => {
            const recipeId = button.getAttribute('data-id');
            const heartIcon = button.querySelector('i');
            
            if (isFavorite(recipeId)) {
                heartIcon.className = 'fas fa-heart';
            } else {
                heartIcon.className = 'far fa-heart';
            }
        });
    }

    function updateFavoritesList() {
        if (!favoritesContainer) return;
        
        const favorites = getFavorites();
        
        if (favorites.length === 0) {
            if (noFavorites) noFavorites.style.display = 'block';
            favoritesContainer.innerHTML = '';
            return;
        }
        
        if (noFavorites) noFavorites.style.display = 'none';
        
        favoritesContainer.innerHTML = '';
        
        favorites.forEach(favoriteId => {
            const recipe = recipes.find(r => r.id === favoriteId);
            if (!recipe) return;
            
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'recipe-card';
            favoriteItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                <div class="recipe-info">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                    <div class="recipe-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${getRegionName(recipe.region)}</span>
                        <span><i class="fas fa-clock"></i> ${recipe.preparationTime.split(' ')[0]}</span>
                        <span><i class="fas fa-signal"></i> ${getDifficultyName(recipe.difficulty)}</span>
                    </div>
                    <div class="recipe-actions">
                        <button class="view-recipe" data-id="${recipe.id}">VIEW</button>
                        <div class="heart-container">
                            <button class="remove-favorite" data-id="${recipe.id}" aria-label="Remove from favorites">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            favoritesContainer.appendChild(favoriteItem);
            
            // Add event to view recipe
            favoriteItem.querySelector('.view-recipe').addEventListener('click', () => {
                showRecipeDetail(recipe.id);
            });
            

            favoriteItem.querySelector('.remove-favorite').addEventListener('click', () => {
                toggleFavorite(recipe.id);
                updateFavoriteIcons();
                updateFavoritesList(); // Refresh the favorites list
            });
        });
    }


    function getRegionName(regionCode) {
        const regions = {
            'norte': 'North',
            'centro': 'Central',
            'sur': 'South',
            'austral': 'Austral'
        };
        return regions[regionCode] || regionCode;
    }

    function getDifficultyName(difficultyCode) {
        const difficulties = {
            'facil': 'Easy',
            'media': 'Medium',
            'dificil': 'Difficult'
        };
        return difficulties[difficultyCode] || difficultyCode;
    }


    createRecipeCards(recipes);
    updateFavoritesList();
});
