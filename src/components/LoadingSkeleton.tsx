export const LoadingSkeleton = () => {
    return (
        <div>
            <ul>
                {[...Array(5)].map((_, index) => (
                    <li key={index} className="mt-2 animate-pulse">
                        <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-200 rounded"></div>
                            <div className="ml-2 h-4 bg-gray-200 rounded w-1/3"></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
} 