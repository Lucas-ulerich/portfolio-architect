import { useState, useEffect } from 'react';

export const useMediumPosts = (username) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username) {
            setLoading(false);
            return;
        }

        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
                );
                const data = await res.json();

                if (data.items) {
                    const formattedPosts = data.items.map(item => {
                        // --- CORREÇÃO DA DATA AQUI ---
                        const dateObj = new Date(item.pubDate);
                        const day = String(dateObj.getDate()).padStart(2, '0'); // Pega o dia (ex: 13)
                        const month = dateObj.toLocaleDateString('pt-BR', { month: 'short' })
                            .replace('.', '') // Remove o ponto (jan. -> jan)
                            .toUpperCase();   // Deixa maiúsculo (JAN)

                        return {
                            title: item.title,
                            desc: item.description.replace(/<[^>]+>/g, '').substring(0, 120) + "...",
                            date: `${day} ${month}`, // Formato Final: "13 JAN"
                            link: item.link,
                            platform: "Medium",
                            thumbnail: item.thumbnail
                        };
                    });
                    setPosts(formattedPosts);
                }
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [username]);

    return { posts, loading };
};