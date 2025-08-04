'use client';

import { useCallback, useEffect, useState } from 'react';

type Visitor = {
    _id: string;
    ip: string;
    country: string;
    city: string;
    region: string;
    regionName: string;
    postal: string;
    latitude: string;
    longitude: string;
    date: string;
    userAgent?: string;
};

export default function VisitorPage() {
    const [visitors, setVisitors] = useState<Visitor[]>([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const fetchVisitors = useCallback(async () => {
        setLoading(true);
        const limit = 50;
        const res = await fetch(`/api/get-visitors?skip=${skip}&limit=${limit}`);
        const data: Visitor[] = await res.json();
        setVisitors((prev) => [...prev, ...data]);
        setSkip((prev) => prev + 10);
        setHasMore(data.length === 10);
        setLoading(false);
    }, [skip]);

    useEffect(() => {
        fetchVisitors();
    }, []);

    return (
        <main className="main">
            <div className="p-6 bg-gray-100 min-h-screen">
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <h1 className="text-2xl font-bold p-6 border-b">🌍 Visitor Logs</h1>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">IP Address</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Country</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">City</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Region</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Region Name</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Postal Code</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Latitude</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Longitude</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">User Agent</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {visitors.map((v, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.ip}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.country}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.city}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.region}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.regionName}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.postal}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.latitude}</td>
                                        <td className="px-4 py-2 text-sm text-gray-900">{v.longitude}</td>
                                        <td className="px-4 py-2 text-sm text-gray-500">{new Date(v.date).toLocaleString()}</td>
                                        <td className="px-4 py-2 text-sm text-gray-500 line-clamp-1 max-w-xs">{v.userAgent}</td>
                                    </tr>
                                ))}
                                {visitors.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="px-4 py-6 text-center text-gray-400">
                                            No visitors logged yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {hasMore && (
                        <div className="p-6 flex justify-center">
                            <button
                                onClick={fetchVisitors}
                                disabled={loading}
                                className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition disabled:opacity-50"
                            >
                                {loading ? 'Loading...' : 'Load More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
