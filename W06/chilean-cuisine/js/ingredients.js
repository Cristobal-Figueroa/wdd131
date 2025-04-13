document.addEventListener('DOMContentLoaded', () => {
    const ingredientsContainer = document.getElementById('ingredients-container');
    const ingredientDetail = document.getElementById('ingredient-detail');
    const ingredientContent = document.getElementById('ingredient-content');
    const backToIngredients = document.getElementById('back-to-ingredients');
    const searchInput = document.getElementById('ingredient-search');
    const searchBtn = document.getElementById('search-btn');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const showStoresBtn = document.getElementById('show-stores');
    const showOnlineBtn = document.getElementById('show-online');
    const showSubstitutesBtn = document.getElementById('show-substitutes');
    const findDetails = document.getElementById('find-details');


    const ingredients = [
        {
            id: 'merken',
            name: 'Merkén',
            category: 'especias',
            image: 'images/ingredients/merken.jpg',
            description: 'Smoked Mapuche seasoning made with dried goat horn chili, coriander seeds, and salt.',
            uses: 'Used to season meats, soups, stews, and sauces, adding a smoky and spicy flavor.',
            substitutes: 'Mix of smoked paprika, cumin, and chili powder.',
            origin: 'Mapuche culture, southern Chile'
        },
        {
            id: 'mote',
            name: 'Mote',
            category: 'granos',
            image: 'images/ingredients/mote.webp',
            description: 'Cooked and hulled wheat prepared through a traditional process with ash or lime.',
            uses: 'Base for the dessert "mote con huesillo", also used in salads and stews.',
            substitutes: 'Pearl barley or bulgur wheat.',
            origin: 'Chilean rural tradition'
        },
        {
            id: 'papas-chilotas',
            name: 'Chilote Potatoes',
            category: 'verduras',
            image: 'images/ingredients/papa.jpg',
            description: 'Native potato varieties from Chiloé Island, with over 200 different types in various colors and shapes.',
            uses: 'Main ingredient in dishes such as milcaos, chapaleles, and curanto.',
            substitutes: 'Small potatoes or new potatoes.',
            origin: 'Chiloé Island, southern Chile'
        },
        {
            id: 'piure',
            name: 'Piure',
            category: 'mariscos',
            image: 'images/ingredients/piure.webp',
            description: 'Intense reddish seafood that grows attached to rocks along the Chilean coast.',
            uses: 'Consumed raw in salads, in ceviches, or cooked in seafood stews.',
            substitutes: 'No direct substitute, but can be replaced with other seafood with intense flavor.',
            origin: 'Central and southern coasts of Chile'
        },
        {
            id: 'luche',
            name: 'Luche',
            category: 'mariscos',
            image: 'images/ingredients/luche.jpg',
            description: 'Edible dark green seaweed harvested along the Chilean coasts.',
            uses: 'Used in stews, soups, and as an accompaniment to seafood dishes.',
            substitutes: 'Nori or other edible seaweeds.',
            origin: 'Coasts of Chile'
        },
        {
            id: 'chuchoca',
            name: 'Chuchoca',
            category: 'granos',
            image: 'images/ingredients/chuchoca.jpg',
            description: 'Dried and coarsely ground corn, traditionally sun-dried or smoked.',
            uses: 'Thickener for stews and soups, especially in pastel de choclo (corn pie).',
            substitutes: 'Polenta or coarse cornmeal.',
            origin: 'Central region of Chile'
        },
        {
            id: 'cochayuyo',
            name: 'Cochayuyo',
            category: 'mariscos',
            image: 'images/ingredients/cochayuyo.jpg',
            description: 'Dark brown seaweed harvested along the Chilean coasts.',
            uses: 'Used in salads, stews, and as an accompaniment to dishes.',
            substitutes: 'Other seaweeds such as kombu or wakame.',
            origin: 'Central and southern coasts of Chile'
        },
        {
            id: 'charqui',
            name: 'Charqui',
            category: 'especias',
            image: 'images/ingredients/charqui.jpg',
            description: 'Dehydrated and salted meat, traditionally made from llama, alpaca, or horse meat.',
            uses: 'Consumed as a snack or rehydrated for stews and soups.',
            substitutes: 'Beef jerky or cecina.',
            origin: 'Northern Chile, Andean tradition'
        }
    ];

    const findOptions = {
        stores: {
            title: 'Specialized Stores',
            content: `
                <p>Here are some stores where you can find authentic Chilean ingredients:</p>
                <ul>
                    <li><strong>Latin American Stores:</strong> Look for markets specializing in Latin American products in your city.</li>
                    <li><strong>Ethnic Markets:</strong> Many cities have markets that specialize in products from different cultures.</li>
                    <li><strong>Gourmet Stores:</strong> Some gourmet stores often have sections of international products.</li>
                </ul>
            `
        },
        online: {
            title: 'Online Shopping',
            content: `
                <p>Here are some options for buying Chilean ingredients online:</p>
                <ul>
                    <li><strong>Amazon:</strong> Has a good selection of Chilean products.</li>
                    <li><strong>Specialized Online Stores:</strong> Sites like ChileanFlavors.com or SaborChileno.com.</li>
                    <li><strong>Etsy:</strong> Some sellers offer Chilean spices and artisanal products.</li>
                </ul>
            `
        },
        substitutes: {
            title: 'Substitutes for Chilean Ingredients',
            content: `
                <p>If you can't find specific Chilean ingredients, here are some alternatives:</p>
                <ul>
                    <li><strong>Merkén:</strong> Mix of smoked paprika, cumin, and chili powder.</li>
                    <li><strong>Mote:</strong> Pearl barley or bulgur wheat.</li>
                    <li><strong>Chilote Potatoes:</strong> Small potatoes or new potatoes.</li>
                    <li><strong>Cochayuyo:</strong> Kombu or wakame seaweed.</li>
                    <li><strong>Charqui:</strong> Beef jerky or cecina.</li>
                </ul>
            `
        }
    };


    function createIngredientCards(ingredientsToShow) {
        ingredientsContainer.innerHTML = '';
        
        if (ingredientsToShow.length === 0) {
            ingredientsContainer.innerHTML = '<p class="no-results">No ingredients found matching your search.</p>';
            return;
        }
        
        ingredientsToShow.forEach(ingredient => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <img src="${ingredient.image}" alt="${ingredient.name}" loading="lazy">
                <div class="recipe-info">
                    <h3>${ingredient.name}</h3>
                    <p>${ingredient.description}</p>
                    <div class="recipe-meta">
                        <span><i class="fas fa-tag"></i> ${getCategoryName(ingredient.category)}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${ingredient.origin.split(',')[0]}</span>
                    </div>
                </div>
            `;
            
            ingredientsContainer.appendChild(card);
            
            // Hacer que toda la tarjeta sea clickeable
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                showIngredientDetail(ingredient.id);
            });
        });
    }


    function showIngredientDetail(ingredientId) {
        const ingredient = ingredients.find(i => i.id === ingredientId);
        
        if (!ingredient) return;
        

        ingredientsContainer.parentElement.classList.add('hidden');
        document.querySelector('.ingredient-search').classList.add('hidden');
        ingredientDetail.classList.remove('hidden');
        

        ingredientContent.innerHTML = `
            <div class="ingredient-header">
                <h2>${ingredient.name}</h2>
                <span class="ingredient-category"><i class="fas fa-tag"></i> ${getCategoryName(ingredient.category)}</span>
            </div>
            <div class="ingredient-main">
                <div class="ingredient-image">
                    <img src="${ingredient.image}" alt="${ingredient.name}">
                </div>
                <div class="ingredient-details">
                    <div class="detail-section">
                        <h3><i class="fas fa-info-circle"></i> Description</h3>
                        <p>${ingredient.description}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-utensils"></i> Culinary Uses</h3>
                        <p>${ingredient.uses}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-map-marker-alt"></i> Origin</h3>
                        <p>${ingredient.origin}</p>
                    </div>
                    <div class="detail-section">
                        <h3><i class="fas fa-exchange-alt"></i> Possible Substitutes</h3>
                        <p>${ingredient.substitutes}</p>
                    </div>
                </div>
            </div>
            <div class="find-options">
                <h3>Where to Find Chilean Ingredients</h3>
                <div class="find-buttons">
                    <button id="show-stores" class="btn-small"><i class="fas fa-store"></i> Specialized Stores</button>
                    <button id="show-online" class="btn-small"><i class="fas fa-shopping-cart"></i> Online Shopping</button>
                    <button id="show-substitutes" class="btn-small"><i class="fas fa-exchange-alt"></i> Substitutes</button>
                </div>
                <div id="find-details" class="find-details">
                    <h4>Select an option to see more information</h4>
                </div>
            </div>
        `;
        
        // Setup find buttons after rendering the content
        setupFindButtons();
    }


    if (backToIngredients) {
        backToIngredients.addEventListener('click', () => {
            ingredientDetail.classList.add('hidden');
            ingredientsContainer.parentElement.classList.remove('hidden');
            document.querySelector('.ingredient-search').classList.remove('hidden');
        });
    }
    
    // Handle find options buttons
    function setupFindButtons() {
        const showStoresBtn = document.getElementById('show-stores');
        const showOnlineBtn = document.getElementById('show-online');
        const showSubstitutesBtn = document.getElementById('show-substitutes');
        const findDetails = document.getElementById('find-details');
        
        if (showStoresBtn && showOnlineBtn && showSubstitutesBtn && findDetails) {
            showStoresBtn.addEventListener('click', () => {
                findDetails.innerHTML = `
                    <h4><i class="fas fa-store"></i> Specialized Stores</h4>
                    <p>Here are some stores where you can find authentic Chilean ingredients:</p>
                    <ul>
                        <li><strong>Latin American Stores:</strong> Look for markets specializing in Latin American products in your city.</li>
                        <li><strong>Ethnic Markets:</strong> Many cities have markets that specialize in products from different cultures.</li>
                        <li><strong>Gourmet Stores:</strong> Some gourmet stores often have sections of international products.</li>
                    </ul>
                `;
            });
            
            showOnlineBtn.addEventListener('click', () => {
                findDetails.innerHTML = `
                    <h4><i class="fas fa-shopping-cart"></i> Online Shopping</h4>
                    <p>Here are some options for buying Chilean ingredients online:</p>
                    <ul>
                        <li><strong>Amazon:</strong> Has a good selection of Chilean products.</li>
                        <li><strong>Specialized Online Stores:</strong> Sites like ChileanFlavors.com or SaborChileno.com.</li>
                        <li><strong>Etsy:</strong> Some sellers offer Chilean spices and artisanal products.</li>
                    </ul>
                `;
            });
            
            showSubstitutesBtn.addEventListener('click', () => {
                findDetails.innerHTML = `
                    <h4><i class="fas fa-exchange-alt"></i> Substitutes</h4>
                    <p>If you can't find specific Chilean ingredients, here are some alternatives:</p>
                    <ul>
                        <li><strong>Merkén:</strong> Mix of smoked paprika, cumin, and chili powder.</li>
                        <li><strong>Mote:</strong> Pearl barley or bulgur wheat.</li>
                        <li><strong>Chilote Potatoes:</strong> Small potatoes or new potatoes.</li>
                        <li><strong>Cochayuyo:</strong> Kombu or wakame seaweed.</li>
                        <li><strong>Charqui:</strong> Beef jerky or cecina.</li>
                    </ul>
                `;
            });
        }
    }


    function searchIngredients() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
        
        let filteredIngredients = [...ingredients];
        

        if (activeCategory !== 'all') {
            filteredIngredients = filteredIngredients.filter(ingredient => ingredient.category === activeCategory);
        }
        

        if (searchTerm) {
            filteredIngredients = filteredIngredients.filter(ingredient => 
                ingredient.name.toLowerCase().includes(searchTerm) || 
                ingredient.description.toLowerCase().includes(searchTerm)
            );
        }
        
        createIngredientCards(filteredIngredients);
    }


    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', searchIngredients);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                searchIngredients();
            }
        });
    }


    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {

                categoryButtons.forEach(btn => btn.classList.remove('active'));
                

                button.classList.add('active');
                

                searchIngredients();
            });
        });
    }


    if (showStoresBtn && showOnlineBtn && showSubstitutesBtn && findDetails) {
        showStoresBtn.addEventListener('click', () => {
            showFindOption('stores');
        });
        
        showOnlineBtn.addEventListener('click', () => {
            showFindOption('online');
        });
        
        showSubstitutesBtn.addEventListener('click', () => {
            showFindOption('substitutes');
        });
    }


    function showFindOption(option) {
        if (!findDetails || !findOptions[option]) return;
        
        findDetails.innerHTML = `
            <h3>${findOptions[option].title}</h3>
            ${findOptions[option].content}
        `;
        
        findDetails.style.display = 'block';
    }

    function getCategoryName(categoryCode) {
        const categories = {
            'especias': 'Spices and Seasonings',
            'verduras': 'Vegetables and Tubers',
            'granos': 'Grains and Cereals',
            'mariscos': 'Seafood and Seaweed'
        };
        return categories[categoryCode] || categoryCode;
    }


    createIngredientCards(ingredients);
});
